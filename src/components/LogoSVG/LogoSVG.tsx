import React from 'react';

export interface LogoSVGProps {
  stacheColors?: {
    fill: string;
    outline: string;
  };
  nameColor?: string;
  dColor?: string;
  codesColor?: string;
}

/**
 *
 * SVG jdhc logo
 */
export const LogoSVG: React.FC<LogoSVGProps> = ({
  stacheColors = {
    fill: '#fff',
    outline: '#929497',
  },
  nameColor = '#8bd70c',
  dColor = '#8300ff',
  codesColor = '#00b6ff',
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.54 66.83">
      <g id="stache">
        <path
          style={{ fill: stacheColors.fill }}
          d="M206.2,72.31c-14.39,0-27-2.86-32.82-7.42a7.45,7.45,0,0,1-1.42-1.3l-.43-.62,0,.75c0,.08-.07.38-.76.91-2.1,1.62-15.06,7.64-30.49,7.66-12.95,0-19.63-6.67-20.38-12.86-.41-3.38,1.12-6,3.91-6.69a29,29,0,0,1,6.63-1c2.12,0,3.41.52,3.84,1.53.67,1.58-.84,4.18-2.26,5.89a4.06,4.06,0,0,0-.39-2.9,2.06,2.06,0,0,0-1.8-.86,4.52,4.52,0,0,0-.93.11c-4.2,1-4.43,3.1-4.33,4,.26,2.35,3.62,4.88,8.19,4.87a13.76,13.76,0,0,0,6-1.43c2.3-1.11,5-3.54,8.18-6.35,5.7-5.07,12.15-10.82,18.37-10.82a9.68,9.68,0,0,1,6.6,2.64l.16.14.17-.13a11.58,11.58,0,0,1,7.54-2.94c6.59,0,12.84,5.86,18.35,11,3,2.86,5.68,5.33,8,6.43A13.62,13.62,0,0,0,212,64.33h0c5.07,0,9-3.15,9.14-6,0-1.06-.4-3.58-5.71-4.11l-.67,0a3.56,3.56,0,0,0-3.14,1.43,4.73,4.73,0,0,0-.57,3.47c-1.71-1.12-3.1-3.31-2.65-5.19.55-2.27,3.57-3.53,8.52-3.53a39.76,39.76,0,0,1,4.28.26c2.84.3,4.61,3.1,4.41,6.95-.32,5.91-5.75,14.69-19.4,14.69Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: stacheColors.outline }}
          d="M179.77,45.71c6.49,0,12.7,5.83,18.18,11,3.06,2.87,5.71,5.34,8,6.47a13.87,13.87,0,0,0,6,1.43c5.36,0,9.25-3.27,9.39-6.2.12-2.36-2.1-4-5.93-4.36a5.69,5.69,0,0,0-.7,0,3.78,3.78,0,0,0-3.34,1.54,4.73,4.73,0,0,0-.71,3.06c-1.4-1.13-2.45-3-2.07-4.58.52-2.15,3.46-3.34,8.28-3.34a41.76,41.76,0,0,1,4.25.25c2.71.3,4.39,3,4.19,6.7a14.26,14.26,0,0,1-4.76,9.55c-3.51,3.21-8.48,4.9-14.44,4.9-14.33,0-26.85-2.84-32.66-7.36a7.62,7.62,0,0,1-1.37-1.25l-.76-1.06-.15,1.32c0,.07-.14.32-.67.72C168.51,66,155.62,72,140.21,72c-12.75,0-19.35-6.55-20.09-12.64-.39-3.25,1.07-5.77,3.73-6.42a29,29,0,0,1,6.57-1c2,0,3.23.47,3.61,1.38.52,1.24-.48,3.3-1.69,5a3.75,3.75,0,0,0-.53-2.21,2.29,2.29,0,0,0-2-1,4.45,4.45,0,0,0-1,.12c-4.39,1-4.62,3.3-4.52,4.24.28,2.47,3.73,5.1,8.44,5.1a14,14,0,0,0,6.11-1.45c2.34-1.14,5.08-3.57,8.25-6.4,5.66-5,12.08-10.75,18.2-10.75a9.44,9.44,0,0,1,6.44,2.58l.32.28.33-.27a11.34,11.34,0,0,1,7.38-2.88m0-.5a11.9,11.9,0,0,0-7.7,3,10,10,0,0,0-6.77-2.7c-9.77,0-20.24,14.08-26.66,17.2a13.63,13.63,0,0,1-5.9,1.4c-7.32,0-11.6-6.6-3.81-8.35a3.65,3.65,0,0,1,.88-.11c2.48,0,2.2,3.07,1.68,4.46,2.23-2.3,6.39-8.62-1.07-8.62a29,29,0,0,0-6.69,1c-8.36,2.06-4.78,20.05,16.48,20.05h0c15.69,0,28.58-6.12,30.64-7.71.48-.37.84-.77.86-1.1a7.2,7.2,0,0,0,1.47,1.36c5.4,4.2,17.28,7.45,33,7.47h.05c21.26,0,23.58-21.21,15-22.14a38.92,38.92,0,0,0-4.31-.26c-12.27,0-9.42,7.48-5.47,9.49-.55-1.44-.53-5.17,3.31-5.17l.65,0c9.89,1,5,9.57-3.41,9.57a13.42,13.42,0,0,1-5.84-1.38c-6.38-3.08-16.08-17.49-26.43-17.49Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: stacheColors.outline }}
          d="M171.58,49.59c-1.9,2.08-4.17,10.6-.31,14,.2.19.29-1,.14-1.22C170.93,61.55,168.23,56.4,171.58,49.59Z"
          transform="translate(-4.88 -5.73)"
        />
      </g>
      <g id="johndhamm">
        <path
          style={{ fill: nameColor }}
          d="M28,24.88a7.32,7.32,0,0,1,3.46-.68c.43,0,1.4.22,1.4.65a.44.44,0,0,1-.07.21c-5,7.2-17.2,35.35-26.49,35.35-1.33,0-1.44-1.8-1.44-2.7C5,50.26,14.09,40.47,18.56,40.47c.14,0,.43,0,.43.25s-.47.47-.47.47c-2.66,1.33-9.14,9.14-9.14,13.61,0,.46.14.9.61.9,3.46,0,11.27-15.63,13.64-20.41,0,0,3.57-6.59,3.75-9.47A1.35,1.35,0,0,1,28,24.88Zm4.22-2.7c-1,0-1.62-.46-1.62-1.29,0-1.58,2-2.45,3.2-2.45.94,0,1.62.47,1.62,1.26C35.44,21.28,33.53,22.18,32.24,22.18Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M30.15,34c0-4.54,5.07-11,11.44-11,.62,0,3.28.44,3.28,2.42,0,1-.43,1.15-.43,1.58,0,.18.14.43.9.43s1-.36,1.26-.36.29.11.29.61a4.25,4.25,0,0,1-2.49,3.32s-3.27,7.48-10,7.48C33.64,38.56,30.15,38.31,30.15,34Zm9.46-2.59a4.66,4.66,0,0,0-1.33.32.73.73,0,0,1-.28.11c-.18,0-.22-.22-.22-.33a3.9,3.9,0,0,1,1-2.41c1.11-1.19,2.73-.65,2.73-2.88A1.2,1.2,0,0,0,40.23,25c-3.31,0-6.48,6-6.48,9.07a2,2,0,0,0,2,2.09c2.78,0,4.29-3.06,4.29-4.47C40.05,31.51,39.87,31.44,39.61,31.44Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M57,37.12a3.85,3.85,0,0,1-2.8,1.33c-.44,0-.54-.14-.54-.28a.93.93,0,0,1,.14-.4c2.16-3.13,4.32-7.31,4.32-9a.56.56,0,0,0-.54-.54c-3.24,0-9.79,9.07-10.73,10.87-.61,1.11-1.33,1.15-2.7,1.15-1,0-1.26-.22-1.26-.43a.5.5,0,0,1,.11-.29C46,34.82,59.31,5.73,67.15,5.73c1.41,0,1.7.9,1.7,2,0,5.62-6.63,12.39-9.83,13.86a3.05,3.05,0,0,1-1.4.29c-.29,0-.65,0-.65-.32a.61.61,0,0,1,.21-.36c5.37-3.75,7.67-9,7.67-10.15,0-.51-.07-.76-.61-.76-2.81,0-11.84,16.49-11.84,18.32,0,.22.07.4.28.4a1.41,1.41,0,0,0,.72-.36s4.68-4.5,7.49-4.5c1,0,1.55.61,1.55,1.69C62.44,30.07,57.8,36.19,57,37.12Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M70.22,38.53a.48.48,0,0,1,.07-.22c.72-1.08,5.25-8.13,5.25-10.15a.59.59,0,0,0-.57-.65c-3.1,0-9.07,6.55-10.66,8.75a3.07,3.07,0,0,1-2.48,1.08c-.83,0-.94-.33-.94-.47,0-1.08,6.55-12.09,8.21-12.71a3.5,3.5,0,0,1,1.66-.36c.43,0,.86.08.86.36,0,.76-1.73,2.52-1.73,3.28a.38.38,0,0,0,.36.29.57.57,0,0,0,.36-.15c2.45-1.9,5.65-4.14,8.5-4.14.43,0,1.33.15,1.33,1.55,0,1.8-5.55,14-9.22,14C70.4,39,70.22,38.74,70.22,38.53Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: dColor }}
          d="M88.47,38c-.15.47-.47.43-.47.43-1.48,0-1.73-1.15-1.73-1.94a3.75,3.75,0,0,1,.07-.72c0-.36-.25-.36-.25-.36a.79.79,0,0,0-.54.25c-3.06,3-4.68,3-5.43,3s-1.91-.47-1.91-2.49c0-3.34,3.35-9.25,8.06-11.26A9,9,0,0,1,90,24.16a7.54,7.54,0,0,1,2.2.47.45.45,0,0,0,.36-.14c1.69-2.2,9.29-15.77,9.47-16.13.72-1.44,2.55-1.58,4-1.58.18,0,1,0,1,.57s-5.54,6.88-11.12,16.89C95.88,24.24,89.65,34.17,88.47,38ZM89,26.07c-3,0-6.69,5.19-6.69,7.71,0,.71.25,1.07.75,1.07,2.2,0,7.71-6.58,7.71-7.77C90.81,26.72,90.41,26.07,89,26.07Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M104.13,37.12a3.87,3.87,0,0,1-2.81,1.33c-.43,0-.54-.14-.54-.28a.93.93,0,0,1,.14-.4c2.16-3.13,4.32-7.31,4.32-9a.56.56,0,0,0-.54-.54c-3.24,0-9.79,9.07-10.73,10.87-.61,1.11-1.33,1.15-2.69,1.15-1,0-1.26-.22-1.26-.43a.48.48,0,0,1,.1-.29c3-4.75,16.31-33.84,24.16-33.84,1.4,0,1.69.9,1.69,2,0,5.62-6.63,12.39-9.83,13.86a3.05,3.05,0,0,1-1.4.29c-.29,0-.65,0-.65-.32s.22-.36.22-.36c5.36-3.75,7.66-9,7.66-10.15,0-.51-.07-.76-.61-.76-2.81,0-11.84,16.49-11.84,18.32,0,.22.07.4.29.4a1.48,1.48,0,0,0,.72-.36s4.68-4.5,7.48-4.5c1,0,1.55.61,1.55,1.69C109.56,30.07,104.92,36.19,104.13,37.12Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M118.24,38.24a1.8,1.8,0,0,1-1.77-2.05c0-.22.08-.54.08-.76s-.15-.29-.22-.29c-.94,0-3.35,3.78-6.8,3.78-1.48,0-1.48-1.73-1.48-2.19,0-3.85,5.11-13.14,13.93-13.14.29,0,3.21.21,3.21,2.37,0,.22,0,1.08-.62,1.08-.79,0-.82-1.08-4-1.08-3.89,0-7.92,4.43-7.92,7.67a.84.84,0,0,0,.76.9c1.26,0,3.74-1.76,6.08-5.79,0,0,.33-.9,2.41-.9,0,0,1.34.1,1.34.57,0,.07,0,.11-.08.18s-4.06,6-4.53,9.22C118.56,38.09,118.38,38.24,118.24,38.24Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M141,39.25c-.94,0-1.26-1.62-1.26-2,0-3,3.89-7.31,3.89-8.71a.48.48,0,0,0-.51-.54c-3,0-8.67,8.13-8.67,8.13a2.15,2.15,0,0,1-1.8.86c-.58,0-1.37,0-1.37-.46,0-1.55,3.49-5.55,3.49-7.42a.57.57,0,0,0-.5-.61c-4.07,0-9.65,9-9.65,9a3.52,3.52,0,0,1-2.73,1.08c-.83,0-.9-.32-.9-.47,0-1.08,6.87-14,8.53-14.57a3.48,3.48,0,0,1,1.65-.36c.47,0,1.08.07,1.08.36,0,.75-2.48,3.52-2.48,4.64a.44.44,0,0,0,.39.25.65.65,0,0,0,.4-.14S133.93,25,137.17,25c.94,0,1.41.39,1.41,1.22a4.88,4.88,0,0,1-.61,2.09.7.7,0,0,0-.11.36.28.28,0,0,0,.29.29.78.78,0,0,0,.57-.33s4.83-4.75,7.74-4.75c.54,0,1.76,0,1.76,1.55,0,2.19-2.8,6.37-4.64,9.39C142,37.34,141.35,39.25,141,39.25Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: nameColor }}
          d="M165.18,39.25c-.94,0-1.26-1.62-1.26-2,0-3,3.89-7.31,3.89-8.71a.48.48,0,0,0-.51-.54c-3,0-8.67,8.13-8.67,8.13a2.15,2.15,0,0,1-1.8.86c-.58,0-1.37,0-1.37-.46C155.46,35,159,31,159,29.13a.57.57,0,0,0-.5-.61c-4.07,0-9.65,9-9.65,9a3.52,3.52,0,0,1-2.73,1.08c-.83,0-.9-.32-.9-.47,0-1.08,6.87-14,8.53-14.57a3.48,3.48,0,0,1,1.65-.36c.47,0,1.08.07,1.08.36,0,.75-2.48,3.52-2.48,4.64a.45.45,0,0,0,.4.25.64.64,0,0,0,.39-.14S158.13,25,161.36,25c.94,0,1.41.39,1.41,1.22a4.88,4.88,0,0,1-.61,2.09.82.82,0,0,0-.11.36.28.28,0,0,0,.29.29.78.78,0,0,0,.57-.33s4.83-4.75,7.74-4.75c.54,0,1.77,0,1.77,1.55,0,2.19-2.81,6.37-4.65,9.39C166.22,37.34,165.54,39.25,165.18,39.25Z"
          transform="translate(-4.88 -5.73)"
        />
      </g>
      <g id="codes">
        <path
          style={{ fill: codesColor }}
          d="M174.61,30.31a10.21,10.21,0,0,1,2.18-6.71A7.13,7.13,0,0,1,182.6,21a11.57,11.57,0,0,1,6.09,1.48v4.28h-2.52V24.3a8.49,8.49,0,0,0-3.28-.65A4.48,4.48,0,0,0,179,25.52a7.94,7.94,0,0,0-1.37,4.79A7.94,7.94,0,0,0,179,35.1,4.48,4.48,0,0,0,182.89,37a8.91,8.91,0,0,0,2.56-.34,7.51,7.51,0,0,0,1.54-.58q.4-.22,1.23-.81l1.33,2A9.16,9.16,0,0,1,183,39.67,7.54,7.54,0,0,1,176.79,37,10.21,10.21,0,0,1,174.61,30.31Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: codesColor }}
          d="M193.62,37a10,10,0,0,1-2.27-6.71,10,10,0,0,1,2.27-6.71,9,9,0,0,1,12.74,0,9.9,9.9,0,0,1,2.27,6.71A9.9,9.9,0,0,1,206.36,37a9,9,0,0,1-12.74,0Zm2.27-11.5a7.48,7.48,0,0,0-1.48,4.79,7.48,7.48,0,0,0,1.48,4.79,5.43,5.43,0,0,0,8.2,0,7.48,7.48,0,0,0,1.48-4.79,7.48,7.48,0,0,0-1.48-4.79,5.43,5.43,0,0,0-8.2,0Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: codesColor }}
          d="M226.63,12.31V37.15h3v1.51a5.61,5.61,0,0,1-3,.83,3.93,3.93,0,0,1-2.32-.49,2.05,2.05,0,0,1-.67-1.67,7,7,0,0,1-5.44,2.34A5.93,5.93,0,0,1,213,37.06a11.33,11.33,0,0,1-1.84-6.7,10.39,10.39,0,0,1,2.16-6.75A7.49,7.49,0,0,1,219.47,21a12.52,12.52,0,0,1,4.1.75v-7H220.8V12.31ZM214.21,30.18a9.11,9.11,0,0,0,1.19,4.88A3.72,3.72,0,0,0,218.73,37a4.25,4.25,0,0,0,3.49-1.69,6.34,6.34,0,0,0,1.35-4.07V24.8a7.79,7.79,0,0,0-4.12-1.15,4.7,4.7,0,0,0-3.73,1.78A7.14,7.14,0,0,0,214.21,30.18Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: codesColor }}
          d="M247,29.08V31H234.26a7.41,7.41,0,0,0,1.55,4.3A4.49,4.49,0,0,0,239.48,37a10.29,10.29,0,0,0,2.72-.33,7.47,7.47,0,0,0,1.67-.59c.32-.18.75-.45,1.3-.81l1.33,2a9.94,9.94,0,0,1-6.84,2.41A7.66,7.66,0,0,1,233.38,37a10.21,10.21,0,0,1-2.18-6.71,10.21,10.21,0,0,1,2.18-6.71A7.26,7.26,0,0,1,239.32,21,7.09,7.09,0,0,1,245,23.22,8.72,8.72,0,0,1,247,29.08ZM242.6,25a3.88,3.88,0,0,0-3.13-1.3A4.52,4.52,0,0,0,236.13,25a6.67,6.67,0,0,0-1.72,3.48h9.5A6.15,6.15,0,0,0,242.6,25Z"
          transform="translate(-4.88 -5.73)"
        />
        <path
          style={{ fill: codesColor }}
          d="M249.49,34.12H252v2.27a9.07,9.07,0,0,0,3.33.54,5.79,5.79,0,0,0,3-.63,1.79,1.79,0,0,0,.25-3.09,34.84,34.84,0,0,0-3.67-2.15,20.92,20.92,0,0,1-4-2.61,3.58,3.58,0,0,1-1.15-2.79,4,4,0,0,1,1.74-3.47A8.11,8.11,0,0,1,256.22,21,11.71,11.71,0,0,1,262,22.43v4.28h-2.52V24.3a8.87,8.87,0,0,0-3.37-.65,3.87,3.87,0,0,0-2.54.66,2,2,0,0,0-.75,1.46,1.54,1.54,0,0,0,.57,1.26,20.71,20.71,0,0,0,3.49,2,25.79,25.79,0,0,1,4.4,2.85,3.57,3.57,0,0,1,1.18,2.77,4.18,4.18,0,0,1-1.9,3.58,9.11,9.11,0,0,1-5.31,1.35,11,11,0,0,1-5.71-1.37Z"
          transform="translate(-4.88 -5.73)"
        />
      </g>
    </svg>
  );
};
