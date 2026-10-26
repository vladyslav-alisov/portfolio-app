import { Download } from 'lucide-react';
import { cvDownload } from '../data/profile';

export default function ResumeLink({ className = 'button button-outline' }: { className?: string }) {
  return (
    <a className={className} href={cvDownload.href} download={cvDownload.filename} type="application/pdf">
      Download CV <Download size={18} aria-hidden="true" />
    </a>
  );
}
