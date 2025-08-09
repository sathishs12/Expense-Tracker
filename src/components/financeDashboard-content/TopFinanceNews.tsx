// src/components/financeDashboard-content/TopFinanceNews.tsx
import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider, List, ListItem } from "@mui/material";
import Grid from '@mui/material/GridLegacy';
import newsData from "../../data/newsData";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
};

interface TopFinanceNewsProps {
  newsItems?: NewsItem[];
}

const TopFinanceNews: React.FC<TopFinanceNewsProps> = ({
//   newsItems = [
//     {
//       id: 1,
//       title: "Market hits all-time high",
//       description: "The stock market reached an all-time high today...",
//       publishedAt: new Date().toISOString(),
//     },
//     {
//       id: 2,
//       title: "Interest rates unchanged",
//       description: "The central bank decided to keep interest rates steady...",
//       publishedAt: new Date().toISOString(),
//     },
//     {
//       id: 3,
//       title: "Inflation concerns grow",
//       description: "Experts warn that inflation could rise in coming months...",
//       publishedAt: new Date().toISOString(),
//     },
//   ],
}) => {
  const fontFamily = "'Comic Neue', cursive";
   const [displayedNews, setDisplayedNews] = useState(newsData.slice(0, 5));
  const [changingId, setChangingId] = useState<number | null>(null);
  const [highlighted, setHighlighted] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const available = newsData.filter(
        (n) => !displayedNews.some((d) => d.id === n.id)
      );
      if (available.length > 0) {
        const randomIndex = Math.floor(Math.random() * displayedNews.length);
        const randomNew =
          available[Math.floor(Math.random() * available.length)];

        setChangingId(displayedNews[randomIndex].id);
        setTimeout(() => {
          const updated = [...displayedNews];
          updated[randomIndex] = randomNew;
          setDisplayedNews(updated);
          setChangingId(null);
        }, 400);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [displayedNews]);
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: "20px",
        bgcolor: "lavender",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
        mb: 3,
      }}
    >
      <Typography variant="h4" mb={2} sx={{ fontFamily, fontWeight: "bold" }}>
        Top Finance News
      </Typography>
      <Divider sx={{ mb: 2, borderColor: "grey.400", borderBottomWidth: 2 }} />
      <List>
        {displayedNews.map((item) => (
          <ListItem key={item.id} divider>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" mt={1} sx={{ fontFamily, color: "text.secondary" }}>
                  {item.description}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontFamily, mt: 0.5, color: "grey.600" }}
                >
                  {new Date(item.publishedAt).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TopFinanceNews;
