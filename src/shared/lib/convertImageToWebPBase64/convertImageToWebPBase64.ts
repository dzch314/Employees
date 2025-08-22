export const convertImageToWebPBase64 = (image?: File, maxTargetSize = 320) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const side = Math.min(img.width, img.height);
        let sx = 0;
        let sy = 0;
        if (img.width > img.height) {
          sx = (img.width - side) / 2;
        } else if (img.height > img.width) {
          sy = (img.height - side) / 2;
        }
        const targetSize = side > maxTargetSize ? maxTargetSize : side;
        const canvas = document.createElement('canvas');
        canvas.width = targetSize;
        canvas.height = targetSize;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context is not available.'));
          return;
        }
        ctx.drawImage(img, sx, sy, side, side, 0, 0, targetSize, targetSize);
        try {
          const webpDataUrl = canvas.toDataURL('image/webp', 0.8);
          resolve(webpDataUrl);
        } catch (error) {
          reject(error);
        }
      };
      img.onerror = (error) => reject(error);
      img.src = event?.target?.result as string;
    };
    reader.onerror = (error) => reject(error);
    if (image) {
      reader.readAsDataURL(image);
    }
  });
