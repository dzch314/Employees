type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string =>
  [
    cls,
    ...Object.entries(mods).reduce((acc: string[], [className, value]) => {
      if (value) {
        acc.push(className);
      }
      return acc;
    }, []),
    ...additional.filter(Boolean),
  ].join(' ');
