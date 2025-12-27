import { NextResponse } from 'next/server';

interface OpportunityResult {
  title: string;
  description: string;
  legitimacy: {
    isLegal: boolean;
    isGenuine: boolean;
    riskLevel: string;
    warnings: string[];
  };
  investment: {
    initial: string;
    ongoing: string;
  };
  roadmap: {
    phase: string;
    duration: string;
    steps: string[];
  }[];
  resources: string[];
  estimatedEarnings: string;
  pros: string[];
  cons: string[];
}

// Comprehensive knowledge base of legitimate opportunities
const opportunityDatabase: Record<string, OpportunityResult[]> = {
  freelancing: [
    {
      title: 'Content Writing & Copywriting',
      description: 'Create written content for websites, blogs, marketing materials, and businesses. High demand skill with low barrier to entry.',
      legitimacy: {
        isLegal: true,
        isGenuine: true,
        riskLevel: 'Very Low',
        warnings: ['Beware of clients who ask for free samples beyond one short piece', 'Always use escrow services on freelance platforms']
      },
      investment: {
        initial: '$0 - Can start with free accounts on Fiverr, Upwork, or Medium',
        ongoing: '$0-50/month for premium platform memberships (optional)'
      },
      roadmap: [
        {
          phase: 'Phase 1: Skill Building',
          duration: '1-2 weeks',
          steps: [
            'Learn basic SEO writing through free YouTube tutorials (Ahrefs, Neil Patel)',
            'Study copywriting fundamentals (AIDA model, persuasive writing)',
            'Read successful blog posts and analyze their structure',
            'Practice writing 500-1000 word articles daily'
          ]
        },
        {
          phase: 'Phase 2: Portfolio Creation',
          duration: '1-2 weeks',
          steps: [
            'Create free Medium account and publish 5-10 sample articles',
            'Write content in 2-3 niches you know well',
            'Create a simple portfolio using free sites (Contently, Clippings.me)',
            'Request testimonials from friends/family who review your work'
          ]
        },
        {
          phase: 'Phase 3: Client Acquisition',
          duration: '2-4 weeks',
          steps: [
            'Sign up for Fiverr, Upwork, and Freelancer.com (all free)',
            'Create compelling profiles highlighting your niche expertise',
            'Start with lower rates ($10-20 per 500 words) to build reviews',
            'Bid on 10-15 jobs daily that match your skills',
            'Join Facebook groups for content writers and find opportunities'
          ]
        },
        {
          phase: 'Phase 4: Scaling',
          duration: 'Ongoing',
          steps: [
            'Increase rates as you gain 10+ reviews',
            'Specialize in high-paying niches (tech, finance, health)',
            'Build long-term client relationships for recurring work',
            'Create content packages and templates to work faster'
          ]
        }
      ],
      resources: [
        'Free Course: Copyblogger Content Marketing Certification',
        'Platform: Fiverr.com (start with basic gigs)',
        'Platform: Upwork.com (create compelling profile)',
        'Learning: YouTube - "Income School" channel for content writing',
        'Community: r/freelancewriters on Reddit',
        'Tool: Grammarly free version for editing'
      ],
      estimatedEarnings: '$300-500/month in first 2-3 months, $1000-3000/month after 6 months with consistent effort',
      pros: [
        'Zero initial investment required',
        'Work from anywhere with internet',
        'Flexible schedule',
        'High demand across industries',
        'Scalable income potential',
        'Improves communication skills'
      ],
      cons: [
        'Initial rates are low while building reputation',
        'Can take 2-4 weeks to get first client',
        'Requires consistent daily effort',
        'Competition on freelance platforms',
        'Income inconsistent at first'
      ]
    },
    {
      title: 'Virtual Assistant Services',
      description: 'Provide administrative support remotely - email management, scheduling, data entry, customer service, and social media management.',
      legitimacy: {
        isLegal: true,
        isGenuine: true,
        riskLevel: 'Very Low',
        warnings: ['Never provide personal financial information to clients', 'Use secure platforms for payment']
      },
      investment: {
        initial: '$0 - Use free email and productivity tools',
        ongoing: '$0-20/month for optional productivity apps'
      },
      roadmap: [
        {
          phase: 'Phase 1: Skill Assessment & Learning',
          duration: '1 week',
          steps: [
            'List your existing admin skills (email, scheduling, data entry, etc.)',
            'Take free VA courses on YouTube (Abbey Ashley, Gina Horkey)',
            'Learn Google Workspace basics (Docs, Sheets, Calendar)',
            'Understand Zoom, Slack, and Trello basics'
          ]
        },
        {
          phase: 'Phase 2: Service Definition',
          duration: '3-5 days',
          steps: [
            'Define 3-5 services you will offer',
            'Research market rates for VA services ($15-50/hour)',
            'Create service packages (basic, standard, premium)',
            'Prepare response templates for common client questions'
          ]
        },
        {
          phase: 'Phase 3: Finding Clients',
          duration: '2-4 weeks',
          steps: [
            'Create profiles on Belay, Time Etc, Fancy Hands',
            'Post services on Fiverr and Upwork',
            'Join VA Facebook groups and introduce yourself',
            'Reach out to small business owners on LinkedIn',
            'Offer first 5 hours at discount to build testimonials'
          ]
        },
        {
          phase: 'Phase 4: Growth',
          duration: 'Ongoing',
          steps: [
            'Build retainer relationships with 2-3 steady clients',
            'Specialize in high-value tasks (social media, project management)',
            'Increase rates by $5/hour every 3 months',
            'Create systems and templates to work more efficiently'
          ]
        }
      ],
      resources: [
        'Free Training: Gina Horkey\'s "Fully Booked VA" free email course',
        'Platform: Belay.com (apply to work as VA)',
        'Platform: Time Etc (UK/US based opportunities)',
        'Platform: Fancy Hands (task-based VA work)',
        'Community: Virtual Assistant Forums on Facebook',
        'Learning: "The Bootstrap VA" free podcast'
      ],
      estimatedEarnings: '$400-800/month in first 2 months, $1500-3000/month after 4-6 months',
      pros: [
        'No money needed to start',
        'Flexible hours',
        'Variety of tasks keeps work interesting',
        'High demand from small businesses and entrepreneurs',
        'Build long-term client relationships',
        'Skills are transferable to many careers'
      ],
      cons: [
        'May need to work in client time zones',
        'Building initial client base takes time',
        'Some clients may be demanding',
        'Need reliable internet connection',
        'Administrative tasks can be repetitive'
      ]
    }
  ],
  online: [
    {
      title: 'Affiliate Marketing (Content Creation)',
      description: 'Create content (blog, YouTube, social media) that recommends products and earn commissions when people buy through your links.',
      legitimacy: {
        isLegal: true,
        isGenuine: true,
        riskLevel: 'Low',
        warnings: [
          'Takes 3-6 months to see meaningful income',
          'Avoid "get rich quick" affiliate schemes',
          'Always disclose affiliate relationships (FTC requirement)',
          'Some programs have strict rules about promotion methods'
        ]
      },
      investment: {
        initial: '$0 - Start with free platforms (YouTube, Medium, TikTok, Instagram)',
        ongoing: '$0-15/month (optional domain/hosting if you want a blog)'
      },
      roadmap: [
        {
          phase: 'Phase 1: Niche Selection & Research',
          duration: '3-5 days',
          steps: [
            'Choose a niche you\'re knowledgeable/passionate about',
            'Research affiliate programs in your niche (Amazon Associates, ShareASale, ClickBank)',
            'Study successful affiliates in your niche on YouTube',
            'Identify 10-20 products you could genuinely recommend',
            'Check commission rates (aim for 5-50% depending on product type)'
          ]
        },
        {
          phase: 'Phase 2: Platform Setup',
          duration: '1 week',
          steps: [
            'Choose your primary platform (YouTube easiest for beginners)',
            'Create professional profile/channel with clear niche focus',
            'Apply to 3-5 affiliate programs (Amazon Associates, CJ Affiliate, etc.)',
            'Create content calendar for first 20 pieces of content',
            'Set up free link tracking tools (Bitly for tracking clicks)'
          ]
        },
        {
          phase: 'Phase 3: Content Creation',
          duration: '2-3 months',
          steps: [
            'Create 2-3 pieces of content per week consistently',
            'Focus on "review", "vs comparison", "best X for Y" content',
            'Include affiliate links naturally in content',
            'Engage with comments and build community',
            'Cross-promote on multiple platforms (YouTube + Pinterest + Instagram)',
            'Learn basic SEO to help content get discovered'
          ]
        },
        {
          phase: 'Phase 4: Optimization & Scaling',
          duration: 'Ongoing (months 4+)',
          steps: [
            'Analyze which content drives most clicks/sales',
            'Double down on top-performing content types',
            'Update old content with better affiliate links',
            'Build email list for direct promotion',
            'Test higher-commission affiliate programs',
            'Consider adding display ads once you have traffic'
          ]
        }
      ],
      resources: [
        'Free Course: Amazon Associates Central (official tutorials)',
        'YouTube Channel: Authority Hacker (affiliate marketing strategies)',
        'Platform: Amazon Associates (easiest to start)',
        'Platform: ShareASale.com (wide variety of programs)',
        'Tool: Google Keyword Planner (free - find what people search)',
        'Community: r/affiliatemarketing on Reddit',
        'Learning: "Affiliate Marketing Master Plan" by Matt Diggity (YouTube)'
      ],
      estimatedEarnings: '$0-50 in first 2 months, $100-500/month months 3-6, $500-5000/month after 6-12 months (highly variable)',
      pros: [
        'Can start with zero investment',
        'Passive income potential once content is created',
        'No customer service or inventory required',
        'Scale to very high income with audience growth',
        'Learn valuable digital marketing skills',
        'Work on your own schedule'
      ],
      cons: [
        'Takes 3-6 months to see first significant income',
        'Requires consistent content creation',
        'Algorithm changes can impact traffic',
        'Success depends on building audience trust',
        'Commission rates vary widely',
        'Need to disclose affiliate relationships'
      ]
    },
    {
      title: 'Print on Demand (POD) Designs',
      description: 'Create designs for t-shirts, mugs, phone cases, etc. that are printed and shipped by third parties. You earn profit per sale with zero inventory.',
      legitimacy: {
        isLegal: true,
        isGenuine: true,
        riskLevel: 'Very Low',
        warnings: [
          'Never use copyrighted designs, logos, or brand names',
          'Research trending niches but avoid trademark infringement',
          'Income is unpredictable - some designs sell, many don\'t'
        ]
      },
      investment: {
        initial: '$0 - Use free design tools and free POD platforms',
        ongoing: '$0 (completely free to run)'
      },
      roadmap: [
        {
          phase: 'Phase 1: Learning & Research',
          duration: '3-7 days',
          steps: [
            'Research popular niches on Redbubble and Teespring',
            'Study best-selling designs (check bestsellers sections)',
            'Learn copyright basics - what you CAN\'T use',
            'Watch YouTube tutorials on POD success (Shimmy Morris, Alek)',
            'Understand design principles: simplicity often wins'
          ]
        },
        {
          phase: 'Phase 2: Design Creation',
          duration: '1-2 weeks',
          steps: [
            'Learn free design tools: Canva (free tier) or GIMP',
            'Create 20-30 designs in your chosen niche',
            'Focus on text-based designs first (easier for beginners)',
            'Use trending topics, hobbies, professions, jokes',
            'Ensure designs work in multiple colors',
            'Save designs in high resolution (300 DPI, PNG format)'
          ]
        },
        {
          phase: 'Phase 3: Platform Setup & Listing',
          duration: '1 week',
          steps: [
            'Sign up for Redbubble, Teespring, and Merch by Amazon',
            'Create store profiles on each platform',
            'Upload your 20-30 designs',
            'Write keyword-rich titles and descriptions',
            'Add relevant tags to help people find designs',
            'Enable all product types (t-shirts, mugs, stickers, etc.)'
          ]
        },
        {
          phase: 'Phase 4: Growth & Optimization',
          duration: 'Ongoing',
          steps: [
            'Add 5-10 new designs weekly',
            'Track which designs get views vs sales',
            'Create variations of successful designs',
            'Research seasonal trends and create timely designs',
            'Join POD communities to learn what works',
            'Once profitable, consider paid promotion'
          ]
        }
      ],
      resources: [
        'Platform: Redbubble.com (easiest to start, no approval needed)',
        'Platform: Teespring.com (good margins, easy setup)',
        'Platform: Amazon Merch on Demand (requires approval, highest traffic)',
        'Free Tool: Canva.com (design creation)',
        'Free Tool: GIMP (advanced free alternative to Photoshop)',
        'Learning: YouTube - "Shimmy Morris" POD tutorials',
        'Research: Google Trends (find trending topics)',
        'Community: r/printondemand on Reddit'
      ],
      estimatedEarnings: '$0-20 first month, $50-200/month after 3 months with 100+ designs, $500-2000/month after 6-12 months with 300+ designs',
      pros: [
        'Absolutely zero investment required',
        'No inventory or shipping to handle',
        'Completely passive once designs are uploaded',
        'Can work from phone or computer',
        'Scale by adding more designs',
        'Multiple platforms to diversify income'
      ],
      cons: [
        'Highly competitive market',
        'Success is unpredictable - many designs won\'t sell',
        'Requires creativity and design skills',
        'Takes time to build catalog of designs',
        'Profit margins are low per item ($2-8 per sale)',
        'Strict copyright rules - must create original content'
      ]
    }
  ],
  passive: [
    {
      title: 'YouTube Automation (Faceless Content)',
      description: 'Create YouTube videos without showing your face - documentaries, list videos, tutorials using stock footage, voiceover, and screen recordings.',
      legitimacy: {
        isLegal: true,
        isGenuine: true,
        riskLevel: 'Low',
        warnings: [
          'Takes 3-6 months to monetize (1000 subscribers + 4000 watch hours)',
          'Avoid stolen content - must be original commentary/editing',
          'Copyright strikes can kill your channel - only use licensed content'
        ]
      },
      investment: {
        initial: '$0 - Use free tools (OBS Studio, DaVinci Resolve, free stock footage)',
        ongoing: '$0-20/month for premium stock footage (optional)'
      },
      roadmap: [
        {
          phase: 'Phase 1: Niche & Content Strategy',
          duration: '3-5 days',
          steps: [
            'Choose profitable faceless niches: true crime, list videos, tech tutorials, history, motivation',
            'Research successful faceless channels in your niche',
            'Analyze their most popular videos for patterns',
            'Plan your first 30 video topics',
            'Study YouTube SEO basics (keywords, thumbnails)'
          ]
        },
        {
          phase: 'Phase 2: Tool Setup & Learning',
          duration: '1 week',
          steps: [
            'Download free tools: OBS Studio (recording), DaVinci Resolve (editing)',
            'Get free stock footage: Pexels, Pixabay, Unsplash',
            'Learn basic video editing through YouTube tutorials',
            'Set up free text-to-speech (Natural Reader) or record own voice',
            'Practice making 2-3 simple videos (don\'t publish yet)',
            'Learn Canva for creating eye-catching thumbnails'
          ]
        },
        {
          phase: 'Phase 3: Channel Launch',
          duration: '2-3 months',
          steps: [
            'Create YouTube channel with professional branding',
            'Publish 2-3 videos per week consistently',
            'Focus on searchable topics (use TubeBuddy free version)',
            'Create compelling thumbnails and titles',
            'Engage with every comment to boost algorithm',
            'Study analytics to see what works',
            'Cross-promote on Reddit, Twitter, Facebook groups'
          ]
        },
        {
          phase: 'Phase 4: Monetization & Scaling',
          duration: 'Months 4-6+',
          steps: [
            'Push to hit 1000 subs and 4000 watch hours',
            'Apply for YouTube Partner Program',
            'Add affiliate links in descriptions',
            'Create video templates to speed up production',
            'Outsource editing once profitable (Fiverr)',
            'Repurpose content to TikTok and Instagram Reels',
            'Build email list for direct audience connection'
          ]
        }
      ],
      resources: [
        'Free Software: OBS Studio (screen recording)',
        'Free Software: DaVinci Resolve (professional video editing)',
        'Free Footage: Pexels.com, Pixabay.com, Videvo.net',
        'Free Music: YouTube Audio Library, Free Music Archive',
        'Free Tool: Canva (thumbnail creation)',
        'Learning: YouTube - "Make Money Matt" (faceless channel strategies)',
        'Tool: TubeBuddy free version (keyword research)',
        'Community: r/NewTubers on Reddit'
      ],
      estimatedEarnings: '$0 for first 3-6 months, $100-500/month once monetized, $1000-5000/month after 12-18 months with consistent growth',
      pros: [
        'Can start with zero investment',
        'No need to show face or use real voice',
        'Passive income potential from old videos',
        'Multiple revenue streams (ads, affiliates, sponsors)',
        'Skills are valuable and transferable',
        'Can outsource as you grow'
      ],
      cons: [
        'Takes 3-6 months minimum to monetize',
        'Requires consistent content creation',
        'Video editing has learning curve',
        'Algorithm is unpredictable',
        'Competitive space',
        'Time-intensive initially (3-5 hours per video)'
      ]
    }
  ],
  social: [
    {
      title: 'Social Media Management for Small Businesses',
      description: 'Manage social media accounts for local businesses - create posts, respond to comments, grow followers, and increase engagement.',
      legitimacy: {
        isLegal: true,
        isGenuine: true,
        riskLevel: 'Very Low',
        warnings: [
          'Start with clear contracts on deliverables',
          'Don\'t promise specific follower counts',
          'Use business accounts, never ask for personal passwords'
        ]
      },
      investment: {
        initial: '$0 - Use free social media tools and platforms',
        ongoing: '$0-15/month for scheduling tools (optional)'
      },
      roadmap: [
        {
          phase: 'Phase 1: Skill Building',
          duration: '1-2 weeks',
          steps: [
            'Learn social media basics for business (Facebook, Instagram, LinkedIn)',
            'Take free courses: Facebook Blueprint, Google Digital Garage',
            'Study successful local business social media accounts',
            'Learn content creation basics (Canva for graphics)',
            'Understand basic analytics and metrics',
            'Practice creating 20 sample posts in various styles'
          ]
        },
        {
          phase: 'Phase 2: Service Packaging',
          duration: '3-5 days',
          steps: [
            'Define service tiers: Basic ($200/mo), Standard ($400/mo), Premium ($600/mo)',
            'Basic: 3 posts/week, Standard: 5 posts/week + engagement, Premium: daily posts + ads',
            'Create proposal template showing ROI for businesses',
            'Prepare case studies even from mock scenarios',
            'List what\'s included and what\'s not'
          ]
        },
        {
          phase: 'Phase 3: Client Acquisition',
          duration: '2-4 weeks',
          steps: [
            'Identify 50 local businesses with poor social media',
            'Create personalized outreach showing their gaps',
            'Offer first month at 50% off to build portfolio',
            'Join local business networking groups (Chamber of Commerce)',
            'Post on local Facebook groups offering services',
            'Ask friends/family to refer their employers',
            'Cold email with specific improvement suggestions'
          ]
        },
        {
          phase: 'Phase 4: Delivery & Scaling',
          duration: 'Ongoing',
          steps: [
            'Use free scheduling tools (Later, Buffer free tiers)',
            'Create content batches weekly for efficiency',
            'Track metrics and send monthly reports',
            'Ask satisfied clients for testimonials and referrals',
            'Scale to 5-10 clients for $2000-5000/month',
            'Specialize in specific industries (restaurants, fitness, etc.)'
          ]
        }
      ],
      resources: [
        'Free Course: Facebook Blueprint Certification',
        'Free Course: Google Digital Garage - Social Media Marketing',
        'Free Tool: Canva.com (create social posts)',
        'Free Tool: Buffer free plan (schedule 10 posts)',
        'Free Tool: Later free plan (Instagram scheduling)',
        'Learning: YouTube - "Social Media Examiner" channel',
        'Templates: HubSpot free social media templates',
        'Community: r/socialmedia on Reddit'
      ],
      estimatedEarnings: '$200-400 first client (month 1), $800-1500/month with 2-3 clients (months 2-3), $2000-5000/month with 5-10 clients',
      pros: [
        'Zero investment to start',
        'High demand from small businesses',
        'Flexible work schedule',
        'Recurring monthly income',
        'Scalable by adding clients',
        'Learn valuable marketing skills',
        'Can work remotely'
      ],
      cons: [
        'Need to understand multiple platforms',
        'Clients may have unrealistic expectations',
        'Requires creativity and consistency',
        'Managing multiple clients can be time-intensive',
        'Results can take time to show',
        'Weekend/evening work sometimes needed'
      ]
    }
  ]
};

// Analyze query and return relevant opportunities
function analyzeQuery(query: string): OpportunityResult[] {
  const lowerQuery = query.toLowerCase();
  let results: OpportunityResult[] = [];

  // Keyword matching
  if (lowerQuery.match(/freelanc|writing|content|copy|virtual assistant|va/)) {
    results = [...results, ...opportunityDatabase.freelancing];
  }

  if (lowerQuery.match(/online|internet|digital|affiliate|print on demand|pod|design/)) {
    results = [...results, ...opportunityDatabase.online];
  }

  if (lowerQuery.match(/passive|youtube|video|automation/)) {
    results = [...results, ...opportunityDatabase.passive];
  }

  if (lowerQuery.match(/social media|instagram|facebook|marketing/)) {
    results = [...results, ...opportunityDatabase.social];
  }

  // If no specific match, return a curated selection
  if (results.length === 0) {
    results = [
      opportunityDatabase.freelancing[0], // Content writing
      opportunityDatabase.online[1], // Print on Demand
      opportunityDatabase.social[0] // Social Media Management
    ];
  }

  // Remove duplicates and limit to top 3 most relevant
  const uniqueResults = Array.from(new Map(results.map(item => [item.title, item])).values());
  return uniqueResults.slice(0, 3);
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // Analyze the query and return relevant opportunities
    const opportunities = analyzeQuery(query);

    return NextResponse.json({ opportunities });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
