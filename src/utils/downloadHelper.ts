import { SOURCE_ZIP_BASE64, DIST_ZIP_BASE64 } from './zipData';

export function downloadZipPackage(type: 'source' | 'dist', filename: string): boolean {
  try {
    const b64Data = type === 'source' ? SOURCE_ZIP_BASE64 : DIST_ZIP_BASE64;

    // Convert base64 to Uint8Array and Blob
    const byteCharacters = atob(b64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/zip' });

    // Create object URL
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      try {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      } catch {
        // ignore
      }
    }, 1500);

    return true;
  } catch (err) {
    console.warn('Blob URL download attempt failed, falling back to data URL:', err);
    try {
      const b64Data = type === 'source' ? SOURCE_ZIP_BASE64 : DIST_ZIP_BASE64;
      const dataUri = `data:application/zip;base64,${b64Data}`;
      const link = document.createElement('a');
      link.href = dataUri;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        try {
          document.body.removeChild(link);
        } catch {
          // ignore
        }
      }, 1500);
      return true;
    } catch (err2) {
      console.error('Direct download failed due to browser sandbox restrictions:', err2);
      return false;
    }
  }
}
