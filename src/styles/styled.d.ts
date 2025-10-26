import 'styled-components';
import { Theme } from '../modules/theme';

declare module 'styled-components' {
    export  interface DefaultTheme extends Theme {}
}