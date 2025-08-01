// components/ExportButton.tsx
import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Button, Tooltip } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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

    const income = transactions.filter(t => t.type === 'income');
    const expense = transactions.filter(t => t.type === 'expense');

    let currentY = 20;

    if (income.length) {
      doc.text('Income Table', 14, currentY);
      autoTable(doc, {
        startY: currentY + 5,
        head: [['Category', 'Amount', 'Date']],
        body: income.map((item) => [item.category, item.amount.toFixed(2), item.date]),
      });
      currentY = doc.lastAutoTable.finalY + 10;
    }

    if (expense.length) {
      doc.text('Expense Table', 14, currentY);
      autoTable(doc, {
        startY: currentY + 5,
        head: [['Category', 'Amount', 'Date']],
        body: expense.map((item) => [item.category, item.amount.toFixed(2), item.date]),
      });
    }

    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
    doc.save(`transactions-${formattedDate}.pdf`);
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
          background: 'linear-gradient(to right, #3f51b5, #2196f3)',
          boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
          '&:hover': {
            background: 'linear-gradient(to right, #303f9f, #1976d2)',
          },
        }}
      >
        <PictureAsPdfIcon />
      </Button>
    </Tooltip>
  );
};

export default ExportButton;
