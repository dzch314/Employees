import { convertImageToWebPBase64 } from './convertImageToWebPBase64';

describe('Test convertImageToWebPBase64 function', () => {
  let mockFileReader: Partial<FileReader>;
  let mockImage: HTMLImageElement;
  let mockCanvas: HTMLCanvasElement;
  let mockCtx: Partial<CanvasRenderingContext2D>;

  beforeEach(() => {
    jest.useFakeTimers();

    mockFileReader = {
      readAsDataURL: jest.fn(function (this: FileReader) {
        this.onload?.({
          target: { result: 'data:image/png;base64,testdata' },
        } as unknown as ProgressEvent<FileReader>);
      }),
    };
    jest
      .spyOn(window, 'FileReader')
      .mockImplementation(() => mockFileReader as FileReader);

    mockImage = {} as unknown as HTMLImageElement;
    jest
      .spyOn(window, 'Image')
      .mockImplementation(() => mockImage as HTMLImageElement);

    mockCanvas = document.createElement('canvas');
    mockCtx = { drawImage: jest.fn() };
    jest
      .spyOn(mockCanvas, 'getContext')
      .mockReturnValue(mockCtx as CanvasRenderingContext2D);

    jest.spyOn(document, 'createElement').mockImplementation((tag: string) => {
      if (tag === 'canvas') return mockCanvas;
      return document.createElement(tag);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it('converts PNG', async () => {
    mockImage.width = 100;
    mockImage.height = 100;
    jest
      .spyOn(mockCanvas, 'toDataURL')
      .mockReturnValue('data:image/webp;base64,webpdata');

    setTimeout(() => mockImage.onload?.(new Event('load')), 0);

    const file = new File(['dummy'], 'test.png', { type: 'image/png' });
    const promise = convertImageToWebPBase64(file);

    jest.runAllTimers();
    const result = await promise;

    expect(result).toBe('data:image/webp;base64,webpdata');
    expect(mockCtx.drawImage).toHaveBeenCalledWith(mockImage, 0, 0);
  });

  it('reject', async () => {
    mockImage.width = 100;
    mockImage.height = 100;
    jest.spyOn(mockCanvas, 'toDataURL').mockReturnValue('');

    setTimeout(() => mockImage.onload?.(new Event('load')), 0);

    const file = new File(['dummy'], 'test.png', { type: 'image/png' });
    const promise = convertImageToWebPBase64(file);

    jest.runAllTimers();
    await expect(promise).rejects.toThrow(
      'WebP conversion not supported or failed.',
    );
  });

  it('reject if FileReader error', async () => {
    (mockFileReader.readAsDataURL as jest.Mock).mockImplementation(function (
      this: FileReader,
    ) {
      this.onerror?.(new Event('error') as any);
    });

    const file = new File(['dummy'], 'test.png', { type: 'image/png' });
    await expect(convertImageToWebPBase64(file)).rejects.toBeInstanceOf(Event);
  });

  it('reject if no image', async () => {
    setTimeout(() => mockImage.onerror?.(new Event('error')), 0);

    const file = new File(['dummy'], 'test.png', { type: 'image/png' });
    const promise = convertImageToWebPBase64(file);

    jest.runAllTimers();
    await expect(promise).rejects.toBeInstanceOf(Event);
  });
});
