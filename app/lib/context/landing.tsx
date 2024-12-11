import { createContext } from 'react';
import { LandingType } from '../type/landing';

export const LandingContext = createContext<LandingType | null>(null);