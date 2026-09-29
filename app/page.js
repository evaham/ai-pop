
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ConfirmReplaceModal from './components/ConfirmReplaceModal';
import ImageGenerationList from './components/ImageGenerationList';
import ImagePreviewModal from './components/ImagePreviewModal';
import LoadingModal from './components/LoadingModal';
import initialGeneratedItems from './data/initialGeneratedItems.json';
import samplePrompts from './data/samplePrompts.json';
import ToolTip from './components/ToolTip';

export default function Home() {
  return (
    <div className="page-content">
      첫화면
    </div>
  );
}
