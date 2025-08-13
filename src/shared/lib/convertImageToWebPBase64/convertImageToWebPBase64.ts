export const convertImageToWebPBase64 = (image?: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);

      try {
        if (canvas.toDataURL('image/webp')) {
          const webpDataUrl = canvas.toDataURL('image/webp', 0.8); // 0.8 for 80% quality
          resolve(webpDataUrl);
        } else {
          reject(new Error('WebP conversion not supported or failed.'));
        }
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = (error) => reject(error);
    img.src = event?.target?.result as string; // Load the original image data
  };
  reader.onerror = (error) => reject(error);
  if (image) {
    reader.readAsDataURL(image);
  }
});
