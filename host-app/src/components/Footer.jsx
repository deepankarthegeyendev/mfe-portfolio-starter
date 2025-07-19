import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer
      style={{
        width: '100%',
        background: isDark ? '#18121e' : '#eaeaea',
        color: isDark ? '#bbb' : '#222',
        textAlign: 'center',
        padding: '0.5rem 0', // reduced padding
        marginTop: '2rem',
        lineHeight: 1.4, // compact line height
        fontSize: '0.75rem',
      }}
    >
      <span style={{ verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
        <FaRegCopyright style={{ marginRight: 4, fontSize: '0.75rem' }} />
        2025–2030{' '}
        <a
          href="https://github.com/deepankarthegeyen"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: isDark ? '#bbb' : '#222',
            textDecoration: 'underline',
            marginLeft: 4,
          }}
        >
          Deepan Karthegeyen
        </a>
      </span>
    </footer>
  );
}