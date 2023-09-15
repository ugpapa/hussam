import React from 'react';
import {LikesDisplayComponent} from '@/components/pages/LikesDisplayComponent';
import {LikesButtonComponent} from '@/components/pages/LikesButtonComponent';

function LikesPage(){
  return (
    <div>
      <LikesDisplayComponent />
      <LikesButtonComponent />
    </div>
  );
};

export default LikesPage;
