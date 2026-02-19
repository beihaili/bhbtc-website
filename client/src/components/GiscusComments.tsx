/*
Component: GiscusComments
Integrates Giscus GitHub Discussions comments
Automatically follows light/dark theme
*/

import Giscus from "@giscus/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <Giscus
        repo="beihaili/bhbtc-website"
        repoId="R_kgDORTkF-g"
        category="Announcements"
        categoryId="DIC_kwDORTkF-s4C2wSS"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === "dark" ? "dark" : "light"}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
