const pastWork = [
	{
		project:"A Day at the Fair",
		role:"Developer",
		type:"software",
		description:`I built an adaptation of the Dungeons and Dragons module, "A Day at the Faire," which is a Groundhog Day inspired module where adventurers are stuck in a time loop and have to find their way out.
		<br /><br />
		I built the game as a choose your own adventure game that loops back on itself with shifting options using HTML, CSS and javascript. The game takes 1-3 hours to complete.`,
		github:"https://github.com/DigitalCharlie/a-day-at-the-fair",
		site:"https://www.digitalcharlie.com/a-day-at-the-fair/",
		images:[
			{
				image:"images/fair/intro-screenshot.png",
				description:"When players first wake up each morning they're greeted with the same message — the crow of a rooster awakening them from slumber. Though the screen looks the same at first, there are more choices on successive days."
			},
			{
				image:"images/fair/continue-screenshot.png",
				description:"Screens transition from location to location with a distinct set of options at each place. This is the scene outside the inn on the first day."
			},
			{
				image:"images/fair/new-day.gif",
				description:"At the end of each day, players head back to the inn — and when there are new options, they fade in after a moment to make it clear that a new choice is now available. One of my favorite parts about this sequence is having matched backdrops with different lighting, creating a smooth transition between times."
			},
			{
				image:"images/fair/history-screenshot.png",
				description:"A player's entire history is available by clicking 'full history' in the upper right. It has every dialogue option they saw on every previous day."
			}
		]
	},
	{
		project:"The Bargewright Inn",
		role:"Developer",
		type:"software",
		description:`As an avid Dungeons and Dragons player, I have a dozen adventurer's league characters and have had to track them across paper logs, Roll20 documents and spreadsheets. I built a solution to handle character management that makes it easy to track a character's progress through their adventuring career.
		<br /><br />
		The Bargewright Inn includes managing their magic item inventory, story awards, and trade logs. The project was built in React using HTML, CSS and Javascript`,
		github:"https://github.com/DigitalCharlie/bargewright-2-frontend",
		site:"https://bargewright.netlify.app/",
		images:[
			{
				image:"images/bargewright/loginscreen.png",
				description:"When users first come to the site, they're presented with an option to create an account or login."
			},
			{
				image:"images/bargewright/userhome.png",
				description:"A user's hjomepage show all their characters, which can be sorted by any column. In addition, there's a quick link to jump to logging a new adventure for any character right on the homepage."
			},
			{
				image:"images/bargewright/charhome.png",
				description:"A character's homepage is full of information — their past adventures, magic items, story awards, current gold, and so much more. Each column can be sorted, and magic items can be filtered by multiple categories."
			},
			{
				image:"images/bargewright/newadv.png",
				description:"Users can enter the full set of options to log an adventure for a character, from adventure code to the magic items used/destroyed during the adventure."
			},
			{
				image:"images/bargewright/magicitem.png",
				description:"When users enter the name of a magic item, if it's in the SRD it's pulled in automatically and populates the fields. Otherwise, players can create it themselves. "
			},
		]
	},
	{
		project:"Fight the TPP",
		role:"Developer & Campaigner",
		type:"both",
		description:`To bring attention to the Trans Pacific Partnership I built a pair of websites intended to get people talking. The first was a site that looks like a page where one can download the text, but upon trying to click the link, the button would run away from the mouse.
		<br /><br />The second site presented a series of the worse parts of the TPP with amusing ways of saying, "fuck that." Together, they generated millions of hits and tens of thousands of new signups.`,
		github:"https://github.com/DigitalCharlie/readthetpp",
		site:"http://old.readthetpp.com/",
		images:[
			{
				image:"images/tpp/read-tpp-before.png",
				description:"When users first get to the page, it looks similar to how the Office of the US Trade Representative site used to look — same colors and logos."
			},
			{
				image:"images/tpp/read-tpp-after.png",
				description:"The screen users see after the button runs away for a few seconds, giving more information and a way to take action."
			},
			{
				image:"images/tpp/read-tpp.gif",
				description:"The effect of the button running away — fleeing using some simple javascript."
			},
			{
				image:"images/tpp/fuck-tpp.png",
				description:"There were dozens of different facts about the TPP paired with rejection statements, and each time the page is loaded or a new one is called, a new pair is created."
			}
		]
	},
	{
		project:"March for Real Climate Leadership",
		role:"Digital Coordinator",
		type:"campaign",
		description:`Despite a variety of progressive policies, California has a history rife with fossil fuel extraction that disproportinately harms Black and brown communities across the state. Fracking is a central part of that over the last decade and a half. 
		<br /><br />
		Following my work on the People's Climate March, I served as the digital coordinator for a march focused on calling for an end to fracking in California. 8,000 people marched through the streets of Oakland, and at the time was the largest anti-fracking rally ever held in the United States.`,
		news:"https://www.sfgate.com/bayarea/article/Anti-fracking-demonstrators-march-through-Oakland-6068760.php",
		images:[
			{
				image:"images/mrcl/mrcl-march-front.jpeg",
				description:"The front of the march — led by frontline activists dealing with fracking in their communities."
			},
			{
				image:"images/mrcl/mrcl-meme.jpeg",
				description:"At the time, it was the largest anti-fracking march that had ever happened in the US."
			},
			{
				image:"images/mrcl/mrcl-frack-whack.jpeg",
				description:"Unite Here brought a large contingent to the march, including many members' kids."
			},
			{
				image:"images/mrcl/mrcl-hs-group.jpeg",
				description:"A couple of high school groups organized buses and transportation to come to the march."
			},
			{
				image:"images/mrcl/mrcl-rally.jpeg",
				description:"Before the march, we held a rally in Oscar Grant Plaza."
			}
		]
	},
	{
		project:"People's Climate March - 2014",
		role:"Digital Coordinator",
		type:"campaign",
		description:`In 2014, world leaders were coming to New York City a UN summit on climate change. A coalition of environmental organizations came together with the goal of holding a massive demonstration the day before the summit.<br /><br />
		
		I served as the digital coordinator for the march, managing the digital footprint for the coalition and working with member groups to boost their recruitment efforts. In addition, I managed the development of a distributed organizing system that empowered activists to find people who shared interests, geographies, identities and skillsets and work together. <br /><br />
		
		In all, over 300,000 people marched in New York, and thousands of events were heard worldwide. The march was mentioned multiple times on the floor of the UN during the meeting, and at the time was by far the largest climate march in history.`,
		news:'https://www.nytimes.com/2014/09/22/nyregion/new-york-city-climate-change-march.html',
		images:[
			{
				image:"images/pcm2014/pcm-march-front.jpeg",
				description:"This is one of my favorite images because it's from right when the march started — 15 minutes ahead of schedule. There were so many people we needed to step off early."
			},
			{
				image:"images/pcm2014/final-count.jpeg",
				description:"Final counts of march attendance ranged from 300,000 to 400,000 people. The march completely took over downtown NYC."
			},
			{
				image:"images/pcm2014/pcm-route-lineup-v6.png",
				description:"Part of the beauty of the march was the narrative it told in its structure. Contingents self-organized and worked together on what their section would look like. We paired this image with a detailed breakdown of assembly locations by street."
			},

			{
				image:"images/pcm2014/pcm-lucky.jpeg",
				description:"This is an example of the art contingents organized to create. This is Lucky Tran, who coordinated the scientists contingent in the 'the debate is over' section."
			},
			{
				image:"images/pcm2014/pcm-hub-gif.gif",
				description:"We set people up to self organize by posing a question to them — who do they want to organize with? And then we let people go from there. We set every hub up with a suite of tools along with digital support."
			},

			{
				image:"images/pcm2014/flood-wall-st.png",
				description:"The day after the march a subset of the organizers coordinated a mass civil disobedience, calling out the role that Wall Street plays in the climate crisis. Over 2,000 people risked arrest."
			},
		]
	},
	{
		project:"People's Climate March - 2017",
		role:"Digital Director",
		type:"campaign",
		description:`In 2017, many of the same organizations that came together for the 2014 march wanted to hold another mass demonstration marking the 100th day of Trump's presidency, adding the climate movement to the other chorus of voices calling for resistance.
		<br /><br />
		I reprised my role at the center of the coalition's digital presence, this time as digital director. Hundreds of thousands of people marched in Washington, DC, and served as a focus for climate organizations to find ways to work together in the early days of Trump's presidency.`,
		news:'https://www.cnn.com/2017/04/29/us/climate-change-march/index.html',
		images:[
			{
				image:"images/pcm2017/pcm-17-banners.jpeg",
				description:"The march filled the streets around the national mall."
			},
			{
				image:"images/pcm2017/pcm-17-site.png",
				description:"We worked hard to tie the marches together and show a common trajectory — on the site, we used the 2014 march slogan as a backdrop to what we needed in the moment: to resist, build and rise."
			},
			{
				image:"images/pcm2017/pcm-17-wide.png",
				description:"The march was organized into contingents again — this time with parachute banners playing a central role in giving a clear visual identity to the march that was also visible from above where we knew photos would be taken."
			},
			{
				image:"images/pcm2017/pcm2017-route-map-v6.png",
				description:"We took in lessons from other marches that spring and made sure to do more than just mark the march route and setup on the map."
			}
		]
	},
	{
		project:"The Roaming Spoon",
		role:"Developer",
		type:"software",
		description:`I worked with a team of other General Assembly students to build a yelp clone that focuses on food trucks. We followed a design laid out by a UX team and built it to specifications, including the ability to display trucks within a geographic radius on a map.
		<br /><br />
		I served as both a developer on the project and managed the team's github repo to handle collisions and review other students' pull requests.The project was built in React using HTML, CSS and javascript. I recommend using zipcode 10013 to explore the site.`,
		github:"https://github.com/DigitalCharlie/roaming-food-trucks",
		site:"https://roaming-spoon.herokuapp.com/",
		images:[
			{
				image:"images/roaming/create-review.png",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur accusantium rem? Optio, repellat fuga."
			},
			{
				image:"images/roaming/detail-page-1.png",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur accusantium rem? Optio, repellat fuga."
			},
			{
				image:"images/roaming/detail-page-2.png",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur accusantium rem? Optio, repellat fuga."
			},
			{
				image:"images/roaming/landing-page.png",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur accusantium rem? Optio, repellat fuga."
			},
			{
				image:"images/roaming/results-page.png",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur accusantium rem? Optio, repellat fuga."
			},
			{
				image:"images/roaming/signup-page.png",
				description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur accusantium rem? Optio, repellat fuga."
			}
		]
	},
]