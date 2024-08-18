import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Welcome to the museum ticketing system! How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'book_ticket', label: 'Book a ticket', trigger: '3' },
      { value: 'cancel_ticket', label: 'Cancel a ticket', trigger: '4' },
      { value: 'help', label: 'Help', trigger: '5' },
    ],
  },
  {
    id: '3',
    message: 'You selected Book a ticket.',
    end: true,
  },
  {
    id: '4',
    message: 'You selected Cancel a ticket.',
    end: true,
  },
  {
    id: '5',
    message: 'You selected Help.',
    end: true,
  },
];

const Chatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default Chatbot;
