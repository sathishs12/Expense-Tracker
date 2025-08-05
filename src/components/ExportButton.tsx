// // components/ExportButton.tsx
// import React from 'react';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import { Button, Tooltip } from '@mui/material';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// // 👇 Fix TypeScript error for lastAutoTable
// declare module 'jspdf' {
//   interface jsPDF {
//     lastAutoTable: { finalY: number };
//   }
// }

// interface Transaction {
//   id: string;
//   type: 'income' | 'expense';
//   category: string;
//   amount: number;
//   date: string;
// }

// interface Props {
//   transactions: Transaction[];
//   disabled?: boolean;
// }

// const ExportButton: React.FC<Props> = ({ transactions, disabled }) => {
//   const exportToPDF = () => {
//     const doc = new jsPDF();

//     const income = transactions.filter(t => t.type === 'income');
//     const expense = transactions.filter(t => t.type === 'expense');

//     let currentY = 20;

//     if (income.length) {
//       doc.text('Income Table', 14, currentY);
//       autoTable(doc, {
//         startY: currentY + 5,
//         head: [['Category', 'Amount', 'Date']],
//         body: income.map((item) => [item.category, item.amount.toFixed(2), item.date]),
//       });
//       currentY = doc.lastAutoTable.finalY + 10;
//     }

//     if (expense.length) {
//       doc.text('Expense Table', 14, currentY);
//       autoTable(doc, {
//         startY: currentY + 5,
//         head: [['Category', 'Amount', 'Date']],
//         body: expense.map((item) => [item.category, item.amount.toFixed(2), item.date]),
//       });
//     }

//     const today = new Date();
//     const formattedDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
//     doc.save(`transactions-${formattedDate}.pdf`);
//   };

//   return (
//     <Tooltip title="Export PDF">
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={exportToPDF}
//         disabled={disabled}
//         sx={{
//           minWidth: '40px',
//           padding: '6px',
//           background: '#101820',
//           color:"#FEE715",
//           // boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
//           '&:hover': {
//           background: '#FEE715',
//           color:"#101820",
//           },
//         }}
//       >
//         <PictureAsPdfIcon />
//       </Button>
//     </Tooltip>
//   );
// };

// export default ExportButton;




import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Button, Tooltip } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import '@fontsource/comic-neue'; // Defaults to weight 400

// 👇 Fix TypeScript error for lastAutoTable
declare module 'jspdf' {
  interface jsPDF {
    lastAutoTable: { finalY: number };
  }
}

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
}

interface Props {
  transactions: Transaction[];
  disabled?: boolean;
}

const ExportButton: React.FC<Props> = ({ transactions, disabled }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    const income = transactions.filter(t => t.type === 'income');
    const expense = transactions.filter(t => t.type === 'expense');

    const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = expense.reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpense;

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const timestamp = today.toLocaleTimeString();

    // ==== Title Page ====
    doc.setFont('helvetica', 'normal'); // Use default for now
    doc.setTextColor('#000000');
    doc.setFontSize(18);
    doc.text('Expense Tracker Report', pageWidth / 2, 30, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Generated on: ${formattedDate} at ${timestamp}`, pageWidth / 2, 40, { align: 'center' });

    doc.setDrawColor(200, 162, 200); // Lavender-ish
    doc.setLineWidth(0.5);
    doc.line(20, 45, pageWidth - 20, 45);

    let currentY = 55;

    // ==== Income Table ====
    if (income.length) {
      doc.setFontSize(14);
      doc.text('Income Transactions', 14, currentY);
      autoTable(doc, {
        startY: currentY + 5,
        head: [['Category', 'Amount', 'Date']],
        body: income.map(i => [i.category, i.amount.toFixed(2), i.date]),
        theme: 'striped',
        styles: {
          fontSize: 11,
          textColor: '#000000',
          font: 'helvetica',
        },
        headStyles: {
          fillColor: [230, 230, 250], // Light lavender
          textColor: '#000000',
        },
      });
      currentY = doc.lastAutoTable.finalY + 5;
      doc.setFontSize(12);
      doc.text(`Total Income: ₹${totalIncome.toFixed(2)}`, 14, currentY);
      currentY += 15;
    }

    // ==== Expense Table ====
    if (expense.length) {
      doc.setFontSize(14);
      doc.text('Expense Transactions', 14, currentY);
      autoTable(doc, {
        startY: currentY + 5,
        head: [['Category', 'Amount', 'Date']],
        body: expense.map(e => [e.category, e.amount.toFixed(2), e.date]),
        theme: 'striped',
        styles: {
          fontSize: 11,
          textColor: '#000000',
          font: 'helvetica',
        },
        headStyles: {
          fillColor: [255, 182, 193], // Light pink/lavender
          textColor: '#000000',
        },
      });
      currentY = doc.lastAutoTable.finalY + 5;
      doc.setFontSize(12);
      doc.text(`Total Expense: ₹${totalExpense.toFixed(2)}`, 14, currentY);
      currentY += 15;
    }

    // ==== Summary Table ====
    doc.setFontSize(14);
    doc.text('Summary', 14, currentY);
    autoTable(doc, {
      startY: currentY + 5,
      head: [['Total Income', 'Total Expense', 'Balance']],
      body: [[
        totalIncome.toFixed(2),
        totalExpense.toFixed(2),
        balance.toFixed(2),
      ]],
      theme: 'grid',
      styles: {
        fontSize: 12,
        halign: 'center',
        font: 'helvetica',
        textColor: '#000000',
      },
      headStyles: {
        fillColor: [230, 230, 250], // Lavender
        textColor: '#000000',
      },
    });

    // ==== Footer Branding ====
    doc.setFontSize(10);
    doc.text(
      'Generated by Expense Tracker',
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );

    doc.save(`transactions-${formattedDate.replace(/\//g, '-')}.pdf`);
  };

  return (
    <Tooltip title="Export PDF">
      <Button
        variant="contained"
        color="secondary"
        onClick={exportToPDF}
        disabled={disabled}
        sx={{
          minWidth: '40px',
          padding: '6px',
          background: 'black',
          color: 'lavender',
          '&:hover': {
            background: 'lavender',
            color: 'black',
          },
        }}
      >
        <PictureAsPdfIcon />
      </Button>
    </Tooltip>
  );
};

export default ExportButton;
