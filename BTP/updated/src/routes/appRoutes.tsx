import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import Title1Page from "../pages/title1/Title1Page";
import Title2Page from "../pages/title2/Title2Page";
import Title3Page from "../pages/title3/Title3Page";
// import HomePage from "../pages/home/HomePage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import TrailPage from "../pages/search/Search";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      // icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/search",
    element: <TrailPage />,
    state: "trial",
    sidebarProps: {
      displayText: "Search",
      // icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/landcover",
    element: <Title1Page />,
    state: "title1",
    sidebarProps: {
      displayText: "Land Cover",
      // icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/topography",
    element: <Title2Page />,
    state: "title2",
    sidebarProps: {
      displayText: "Topography",
      // icon: <FileDownloadOutlinedIcon />
    }
  },
  // {
  //   path: "/title3",
  //   element: <Title3Page />,
  //   state: "title3",
  //   sidebarProps: {
  //     displayText: "Layer3",
  //     // icon: <FileDownloadOutlinedIcon />
  //   }
  // },
  
  // {
  //   path: "/dashboard",
  //   element: <DashboardPageLayout />,
  //   state: "dashboard",
  //   sidebarProps: {
  //     displayText: "Dashboard",
  //     icon: <DashboardOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       index: true,
  //       element: <DashboardIndex />,
  //       state: "dashboard.index"
  //     },
  //     {
  //       path: "/dashboard/default",
  //       element: <DefaultPage />,
  //       state: "dashboard.default",
  //       sidebarProps: {
  //         displayText: "Default"
  //       },
  //     },
  //     {
  //       path: "/dashboard/analytics",
  //       element: <AnalyticsPage />,
  //       state: "dashboard.analytics",
  //       sidebarProps: {
  //         displayText: "Analytic"
  //       }
  //     },
  //     {
  //       path: "/dashboard/saas",
  //       element: <SaasPage />,
  //       state: "dashboard.saas",
  //       sidebarProps: {
  //         displayText: "Saas"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/component",
  //   element: <ComponentPageLayout />,
  //   state: "component",
  //   sidebarProps: {
  //     displayText: "Components",
  //     icon: <AppsOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/component/alert",
  //       element: <AlertPage />,
  //       state: "component.alert",
  //       sidebarProps: {
  //         displayText: "Alert"
  //       },
  //     },
  //     {
  //       path: "/component/button",
  //       element: <ButtonPage />,
  //       state: "component.button",
  //       sidebarProps: {
  //         displayText: "Button"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/documentation",
  //   element: <DocumentationPage />,
  //   state: "documentation",
  //   sidebarProps: {
  //     displayText: "Documentation",
  //     icon: <ArticleOutlinedIcon />
  //   }
  // },
  // {
  //   path: "/changelog",
  //   element: <ChangelogPage />,
  //   state: "changelog",
  //   sidebarProps: {
  //     displayText: "Changelog",
  //     icon: <FormatListBulletedOutlinedIcon />
  //   }
  // }
];

export default appRoutes;