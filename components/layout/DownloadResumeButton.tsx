'use client';

import React from 'react';
import { DownloadIcon } from '@radix-ui/react-icons';

interface DownloadResumeButtonProps {
  resumeUrl: string; // URL to the resume file
}

const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = ({ resumeUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Specify the file name for the download
    link.click();
  };

  return (
    <div className="mt-14 flex flex-col gap-4 items-center">
      <p className="text-lg">Download my resume from here:</p>
      <button 
        onClick={handleDownload} 
        className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        <DownloadIcon className="h-5 w-5 mr-2" />
        Download Resume
      </button>
    </div>
  );
};

export default DownloadResumeButton;
