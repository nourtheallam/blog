import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "http://nour-allam.com/", // your site url
  title: "noursblog",
  slogan: "My thoughts and course notes",
  description: "and a good reason to explore new web dev tools.",
  social: {
    github: "https://github.com/nourtheallam", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/nourallamdal/", // leave empty if you don't want to show the linkedin
    email: "nour.mo.allam@outlook.com", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
