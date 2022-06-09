import { useLayoutEffect, useEffect } from 'react';
export const isBrowser = typeof window !== 'undefined';
export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
