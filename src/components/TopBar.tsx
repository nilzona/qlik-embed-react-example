export type TopBarProps = {
  title: string;
};

const TopBar = ({ title }: TopBarProps) => (
  <div className="top-bar">
    <span>{title}</span>
    <a href="/embed-web-components/home.html">Take me to web-components</a>
  </div>
);

export default TopBar;
