import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { RiGithubLine } from "react-icons/ri";
import { div } from "three/src/nodes/math/OperatorNode.js";
import { useTheme } from "../../ThemeContext";

const GithubCard = () => {
  const { theme } = useTheme();

  return (
    <div className="h-full flex flex-col justify-between gap-3">
      <div className="flex justify-between items-center mb-1 lg:mb-0">
        <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-40">
          GitHub Contributions
        </span>

        <RiGithubLine className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-40" />
      </div>

      <div className="flex justify-center w-full overflow-hidden">
        <a
          href="https://github.com/BanditaDas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubCalendar
            username="BanditaDas"
            blockSize={10}
            blockMargin={3}
            fontSize={10}
            showTotalCount={false}
            showColorLegend={false}
            colorScheme={theme}
          />
        </a>
      </div>
    </div>
  );
};

export default GithubCard;
