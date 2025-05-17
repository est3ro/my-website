//new posts go here
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  coverImage?: string; // Optional cover image for the blog post
  images?: string[]; // Optional array of images used in the post
}

export const blogPosts: BlogPost[] = [
  {//add new posts here
    id: 1,
    title: 'From Shocks to Stats: How the Nuggets vs Thunder Game Sparked a Data Journey',
    excerpt: 'Intriguing playoff series',
    date: '2025-05-17',
    content: `This NBA playoff season has been full of surprises — and none bigger than the Nuggets putting on a phenomenal performance against the Thunder. What many expected to be a smooth series for Oklahoma City has turned into a nail-biter. Now, all eyes are on Sunday's game, the ultimate decider. Who will take it?

    Watching this unfold made me realize how unpredictable sports can be — and how much data can help us understand the odds, trends, and hidden factors. That's why I've decided to dive deeper into the numbers. I'll be collecting and analyzing data from both the NBA and major football leagues, exploring everything from team momentum and injury impact to fan sentiment and match-day weather.
    
    Stay tuned for predictions, insights, and maybe even a few upsets we can see coming — all powered by data.`
  }
];