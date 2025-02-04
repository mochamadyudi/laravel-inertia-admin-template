export type DataType = {
  id?: string | number;
  title: string;
  starred: boolean;
  avatar?: string;
  name: string;
  subject?: string;
  type: "sent" | "draft" | "receive" | string;
  status?: "active" | "inactive" | string;
  snippet?: string;
  date?: string;
}

const DefaultData: DataType[] = [
  {
    "id": 1,
    "title": "Meeting Reminder",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "John Doe",
    "subject": "Reminder: Team Meeting at 3PM",
    "type": "receive",
    "status": "active",
    "snippet": "Hi team, just a quick reminder that we have a meeting today at 3PM. Please be on time.",
    "date": "11:30AM"
  },
  {
    "id": 2,
    "title": "Project Update",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Jane Smith",
    "subject": "Project X Update",
    "type": "sent",
    "status": "active",
    "snippet": "Hi all, here's the latest update on Project X. We are on track to meet the deadline.",
    "date": "10:15AM"
  },
  {
    "id": 3,
    "title": "Weekend Plans",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Mike Johnson",
    "subject": "Weekend Getaway",
    "type": "draft",
    "status": "inactive",
    "snippet": "Hey, are we still on for the weekend trip? Let me know if anything has changed.",
    "date": "9:45AM"
  },
  {
    "id": 4,
    "title": "New Product Launch",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Sarah Lee",
    "subject": "New Product Launch Details",
    "type": "sent",
    "status": "active",
    "snippet": "Hi team, the new product launch is scheduled for next week. Here are the details...",
    "date": "8:30AM"
  },
  {
    "id": 5,
    "title": "Feedback Request",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "David Brown",
    "subject": "Feedback on Recent Presentation",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, I would appreciate your feedback on the recent presentation I gave. Thanks!",
    "date": "7:20AM"
  },
  {
    "id": 6,
    "title": "Vacation Plans",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
    "name": "Emily Davis",
    "subject": "Vacation Itinerary",
    "type": "draft",
    "status": "inactive",
    "snippet": "Hi, here's the itinerary for our upcoming vacation. Let me know if you have any suggestions.",
    "date": "6:15AM"
  },
  {
    "id": 7,
    "title": "New Job Opportunity",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
    "name": "Chris Wilson",
    "subject": "Job Opportunity at XYZ Corp",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, I came across this job opportunity and thought you might be interested. Check it out!",
    "date": "5:10AM"
  },
  {
    "id": 8,
    "title": "Birthday Invitation",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
    "name": "Laura Martinez",
    "subject": "You're Invited to My Birthday Party!",
    "type": "sent",
    "status": "active",
    "snippet": "Hi, you're invited to my birthday party this Saturday. Hope to see you there!",
    "date": "4:05AM"
  },
  {
    "id": 9,
    "title": "Conference Registration",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/9.jpg",
    "name": "James Anderson",
    "subject": "Conference Registration Confirmation",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, this is a confirmation of your registration for the upcoming conference.",
    "date": "3:00AM"
  },
  {
    "id": 10,
    "title": "New Blog Post",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
    "name": "Olivia Taylor",
    "subject": "Check Out My New Blog Post!",
    "type": "sent",
    "status": "active",
    "snippet": "Hi, I just published a new blog post. Let me know what you think!",
    "date": "2:55AM"
  },
  {
    "id": 11,
    "title": "Networking Event",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/11.jpg",
    "name": "Daniel Thomas",
    "subject": "Networking Event Next Week",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, there's a networking event next week that you might be interested in. Let me know if you're attending.",
    "date": "1:50AM"
  },
  {
    "id": 12,
    "title": "New Feature Release",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "name": "Sophia White",
    "subject": "New Feature Released in App",
    "type": "sent",
    "status": "active",
    "snippet": "Hi, we've just released a new feature in the app. Check it out and let us know your feedback.",
    "date": "12:45AM"
  },
  {
    "id": 13,
    "title": "Team Lunch",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
    "name": "Michael Harris",
    "subject": "Team Lunch This Friday",
    "type": "receive",
    "status": "active",
    "snippet": "Hi team, we're having a team lunch this Friday. Let me know if you can make it.",
    "date": "11:40PM"
  },
  {
    "id": 14,
    "title": "New Book Release",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/14.jpg",
    "name": "Isabella Martin",
    "subject": "My New Book is Out Now!",
    "type": "sent",
    "status": "active",
    "snippet": "Hi, my new book is finally out! You can get it on Amazon or your local bookstore.",
    "date": "10:35PM"
  },
  {
    "id": 15,
    "title": "Webinar Invitation",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/15.jpg",
    "name": "William Thompson",
    "subject": "Invitation to Webinar on AI",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, you're invited to a webinar on AI next week. Register now to secure your spot.",
    "date": "9:30PM"
  },
  {
    "id": 16,
    "title": "New Podcast Episode",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
    "name": "Mia Garcia",
    "subject": "New Podcast Episode is Live!",
    "type": "sent",
    "status": "active",
    "snippet": "Hi, the new episode of my podcast is live. Check it out and let me know your thoughts.",
    "date": "8:25PM"
  },
  {
    "id": 17,
    "title": "Charity Event",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
    "name": "Ethan Martinez",
    "subject": "Charity Event This Weekend",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, there's a charity event this weekend that you might be interested in. Let me know if you're attending.",
    "date": "7:20PM"
  },
  {
    "id": 18,
    "title": "New Movie Release",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
    "name": "Charlotte Robinson",
    "subject": "New Movie Release This Friday",
    "type": "sent",
    "status": "active",
    "snippet": "Hi, the new movie we've been waiting for is finally out this Friday. Let's go watch it together!",
    "date": "6:15PM"
  },
  {
    "id": 19,
    "title": "New Restaurant Opening",
    "starred": false,
    "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
    "name": "Alexander Clark",
    "subject": "New Restaurant Opening in Town",
    "type": "receive",
    "status": "active",
    "snippet": "Hi, there's a new restaurant opening in town this weekend. Let's check it out!",
    "date": "5:10PM"
  },
  {
    "id": 20,
    "title": "New Feature Request",
    "starred": true,
    "avatar": "https://randomuser.me/api/portraits/women/20.jpg",
    "name": "Amelia Lewis",
    "subject": "New Feature Request for App",
    "type": "draft",
    "status": "inactive",
    "snippet": "Hi, I have a new feature request for the app. Let me know if this is something we can implement.",
    "date": "4:05PM"
  }
];
export const InboxData: DataType[] = DefaultData.filter((child: DataType) => child.type === 'receive');

export const StarredData: DataType[] = DefaultData.filter((child: DataType) => child.starred);
export const SentData: DataType[] = DefaultData.filter((child: DataType) => child.type === 'sent');
export const DraftData: DataType[] = DefaultData.filter((child: DataType) => child.type === 'draft');
export const InactiveData: DataType[] = DefaultData.filter((child: DataType) => child.status === 'inactive' && child?.type === 'receive');
