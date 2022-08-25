import { IThemeContentCount } from "../interfaces/interface";

const ThemeChangeNote: React.FC<IThemeContentCount> = ({count}) => 
    <p>Das Theme wurde: <span>{count}</span> mal verändert.</p>;

export default ThemeChangeNote