import { createSelectorHook, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, Test1RootState, Test2RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useTest1Selector: TypedUseSelectorHook<Test1RootState> = useSelector;
export const useTest2Selector = createSelectorHook<Test1RootState>();

export const useTest3Selector: TypedUseSelectorHook<Test2RootState> = useSelector;
export const useTest4Selector = createSelectorHook<Test2RootState>();
