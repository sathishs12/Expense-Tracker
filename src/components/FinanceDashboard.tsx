// import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
// import newsData from "../data/newsData";
// import {
//   Box,
//   Typography,
//   Paper,
//   List,
//   ListItem,
//   Divider,
//   keyframes
// } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import Grid from '@mui/material/GridLegacy';
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import StockPriceTrackerIndia from "./financeDashboard-content/StockPriceTrackerIndia";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// type NewsItem = {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
//   imageUrl: string;
//   publishedAt: string;
// };

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const FinanceDashboard = forwardRef((props, ref) => {
//   const fontFamily = "'Comic Neue', cursive";
//   const [displayedNews, setDisplayedNews] = useState(newsData.slice(0, 5));
//   const [changingId, setChangingId] = useState<number | null>(null);
//   const [highlighted, setHighlighted] = useState(false);

//   // Sample Expense vs Income data
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//       {
//         label: "Income",
//         data: [4000, 4200, 3800, 4500, 4700],
//         backgroundColor: "rgba(75, 192, 192, 0.6)"
//       },
//       {
//         label: "Expenses",
//         data: [3200, 3000, 3500, 3300, 3600],
//         backgroundColor: "rgba(255, 99, 132, 0.6)"
//       }
//     ]
//   };

// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false, // lets us control height
//   plugins: {
//     legend: {
//       position: "bottom" as const
//     }
//   }
// };
//   // Personalized tips
//   const tips = [
//     "Track every expense to see where your money goes.",
//     "Automate savings right after payday.",
//     "Follow the 50/30/20 budgeting rule.",
//     "Cut unused subscriptions to save money.",
//     "Set spending limits for entertainment and dining.",
//     "Shop with a list to avoid impulse buys.",
//     "Review bills and negotiate lower rates."
//   ];

//   // Expose scrollToAndHighlight method to parent
//   useImperativeHandle(ref, () => ({
//     scrollToAndHighlightFinance: () => {
//       setHighlighted(true);
//       const form = document.getElementById("finance-dashboard");
//       if (form) {
//         form.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//       setTimeout(() => setHighlighted(false), 2000);
//     },
//   }));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const available = newsData.filter(
//         (n) => !displayedNews.some((d) => d.id === n.id)
//       );
//       if (available.length > 0) {
//         const randomIndex = Math.floor(Math.random() * displayedNews.length);
//         const randomNew =
//           available[Math.floor(Math.random() * available.length)];

//         setChangingId(displayedNews[randomIndex].id);
//         setTimeout(() => {
//           const updated = [...displayedNews];
//           updated[randomIndex] = randomNew;
//           setDisplayedNews(updated);
//           setChangingId(null);
//         }, 400);
//       }
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [displayedNews]);

//   return (
//     <Box sx={{ fontFamily }}>
//       <Grid container spacing={3} mt={5}>
        
      
//         {/* LEFT COLUMN: Finance News */}
// <Grid item xs={12} md={8}>
//   <Paper
//     id="finance-dashboard"
//     elevation={6}
//     sx={{
//       p: 4,
//       borderRadius: "20px",
//       bgcolor: "lavender",
//       animation: `${fadeIn} 0.5s ease-out`,
//       boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
//       mb: 3
//     }}
//   >
//     <Typography
//       variant="h4"
//       mb={2}
//       sx={{ fontFamily, fontWeight: "bold" }}
//     >
//       Top Finance News
//     </Typography>
//     <Divider sx={{ mb: 2, borderColor: "grey.400", borderBottomWidth: 2 }} />
//     <List>
//       {displayedNews.map((item) => (
//         <AnimatePresence key={item.id}>
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.4 }}
//           >
//             <ListItem divider>
//               <Grid container spacing={1}>
//                 <Grid item xs={12}>
//                   <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily }}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" mt={1} sx={{ fontFamily, color: "text.secondary" }}>
//                     {item.description}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     display="block"
//                     sx={{ fontFamily, mt: 0.5, color: "grey.600" }}
//                   >
//                     {new Date(item.publishedAt).toLocaleString()}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </ListItem>
//           </motion.div>
//         </AnimatePresence>
//       ))}
//     </List>
//   </Paper>

//   {/* Stock Price Tracker */}
// {/* <Paper
//   elevation={6}
//   sx={{
//     p: 4,
//     borderRadius: "20px",
//     bgcolor: "lavender",
//     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)"
//   }}
// >
//   <Typography
//     variant="h5"
//     mb={2}
//     sx={{ fontFamily, fontWeight: "bold" }}
//   >
//     📈 Stock Price Tracker (India)
//   </Typography>
//   <Divider sx={{ mb: 2 }} />
//   <List>
//     {[
//     //   { symbol: "RELIANCE", price: 2955.20, change: "+0.85%" },
//     //   { symbol: "TCS", price: 3925.50, change: "-0.45%" },
//       { symbol: "INFY", price: 1587.40, change: "+1.20%" },
//       { symbol: "HDFCBANK", price: 1650.75, change: "+0.25%" },
//       { symbol: "ITC", price: 448.60, change: "+0.65%" }
//     ].map((stock, index) => (
//       <ListItem key={index} divider>
//         <Grid container>
//           <Grid item xs={6}>
//             <Typography sx={{ fontFamily, fontWeight: "bold" }}>
//               {stock.symbol}
//             </Typography>
//           </Grid>
//           <Grid item xs={6} textAlign="right">
//             <Typography sx={{ fontFamily }}>
//               ₹{stock.price.toFixed(2)}{" "}
//               <span style={{ color: stock.change.startsWith("+") ? "green" : "red" }}>
//                 {stock.change}
//               </span>
//             </Typography>
//           </Grid>
//         </Grid>
//       </ListItem>
//     ))}
//   </List>
// </Paper> */}
// <StockPriceTrackerIndia />
// </Grid>


//         {/* RIGHT COLUMN: Charts + Tips + Alerts */}
//         <Grid item xs={12} md={4}>
//                   <Paper
//                       elevation={6}
//                       sx={{
//                           p: 4,
//                           borderRadius: "20px",
//                           bgcolor: "lavender",
//                           boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
//                           mb: 3
//                       }}
//                   >
//                       <Typography
//                           variant="h5"
//                           mb={2}
//                           sx={{ fontFamily, fontWeight: "bold" }}
//                       >
//                           📊 Expense vs. Income Comparison
//                       </Typography>
//                       <Divider sx={{ mb: 2 }} />

//                       {/* Responsive chart wrapper */}
//                       <Box
//                           sx={{
//                               width: "100%",
//                               height: { xs: 250, sm: 300, md: 200 }, // mobile-friendly heights
//                               overflowX: "auto"
//                           }}
//                       >
//                           <Bar data={chartData} options={chartOptions} />
//                       </Box>
//                   </Paper>
//           <Paper
//             elevation={6}
//             sx={{
//               p: 4,
//               borderRadius: "20px",
//               bgcolor: "lavender",
//               boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
//               mb: 3
//             }}
//           >
//             <Typography
//               variant="h5"
//               mb={2}
//               sx={{ fontFamily, fontWeight: "bold" }}
//             >
//               📰 Personalized Finance Tips
//             </Typography>
//             <Divider sx={{ mb: 2 }} />
//             <List sx={{ maxHeight: 200, overflow: "auto" }}>
//               {tips.map((tip, index) => (
//                 <ListItem key={index} sx={{ py: 0.5 }}>
//                   <Typography sx={{ fontFamily }}>{tip}</Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>

//           <Paper
//             elevation={6}
//             sx={{
//               p: 4,
//               borderRadius: "20px",
//               bgcolor: "lavender",
//               boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)"
//             }}
//           >
//             <Typography
//               variant="h5"
//               mb={2}
//               sx={{ fontFamily, fontWeight: "bold" }}
//             >
//               💡 Budget Alerts
//             </Typography>
//             <Divider sx={{ mb: 2 }} />
//             <Typography sx={{ fontFamily }}>
//               Receive instant alerts when you're close to exceeding your monthly budget.  
//               Stay informed and in control of your finances with real-time notifications.
//             </Typography>
//           </Paper>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// });

// export default FinanceDashboard;



import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Box } from "@mui/material";
import ExpenseIncomeComparison from "./financeDashboard-content/ExpenseIncomeComparison";
import PersonalizedFinanceTips from "./financeDashboard-content/PersonalizedFinanceTips";
import BudgetAlerts from "./financeDashboard-content/BudgetAlerts";
import TopFinanceNews from "./financeDashboard-content/TopFinanceNews";
import Grid from '@mui/material/GridLegacy';
import StockPriceTrackerIndia from "./financeDashboard-content/StockPriceTrackerIndia";

type SectionKey = "expense" | "tips" | "alerts" | "news" | "stockPrice";

export interface FinanceDashboardHandles {
  scrollToAndHighlightFinance: (sectionId: SectionKey) => void;
}

const FinanceDashboard = forwardRef<FinanceDashboardHandles>((props, ref) => {
  const sectionRefs = {
    expense: useRef<HTMLDivElement | null>(null),
    tips: useRef<HTMLDivElement | null>(null),
    stockPrice: useRef<HTMLDivElement | null>(null),
    alerts: useRef<HTMLDivElement | null>(null),
    news: useRef<HTMLDivElement | null>(null),
  };

  const highlightSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (!sectionRef.current) return;
    sectionRef.current.style.transition = "background-color 0.3s";
    sectionRef.current.style.backgroundColor = "rgba(255, 255, 0, 0.3)";
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.style.backgroundColor = "transparent";
      }
    }, 1500);
  };

  useImperativeHandle(ref, () => ({
    scrollToAndHighlightFinance: (sectionId: SectionKey) => {
      const sectionRef = sectionRefs[sectionId];
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        highlightSection(sectionRef);
      }
    }
  }));

  return (
    <Box>
    <Grid container spacing={3} mt={5}>
      {/* Cast here to satisfy TS */}
      <Grid item xs={12} md={8}>
        
      <div ref={sectionRefs.news as React.Ref<HTMLDivElement>}>
        <TopFinanceNews />
      </div>
      <div ref={sectionRefs.stockPrice as React.Ref<HTMLDivElement>}>
      <StockPriceTrackerIndia />
      </div>
       </Grid>
     <Grid item xs={12} md={4}>
      <div ref={sectionRefs.expense as React.Ref<HTMLDivElement>}>
        <ExpenseIncomeComparison />
      </div>
     
      <div ref={sectionRefs.tips as React.Ref<HTMLDivElement>}>
        <PersonalizedFinanceTips />
      </div>

      <div ref={sectionRefs.alerts as React.Ref<HTMLDivElement>}>
        <BudgetAlerts />
      </div>
    </Grid>

    </Grid>
    </Box>
  );
});

export default FinanceDashboard;
