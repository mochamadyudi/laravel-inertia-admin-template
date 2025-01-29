export type SocialType = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}
export type userType = {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  last_online: string;
  status: 'Active' | 'Inactive' | string;
  social?: SocialType
}
export const userData: Array<Omit<userType,'id'>> = [
  {
    "name": "John Doe",
    "avatar": "/assets/img/profile/1.png",
    "email": "johndoe@example.com",
    "last_online": "2023-10-25T14:30:00Z",
    "role": "Admin",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/johndoe",
      "instagram": "https://instagram.com/johndoe",
      "linkedin": "https://linkedin.com/in/johndoe"
    }
  },
  {
    "name": "Jane Smith",
    "avatar": "/assets/img/profile/2.png",
    "email": "janesmith@example.com",
    "last_online": "2023-10-24T09:15:00Z",
    "role": "User",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/janesmith",
      "instagram": "https://instagram.com/janesmith",
      "linkedin": "https://linkedin.com/in/janesmith"
    }
  },
  {
    "name": "Alice Johnson",
    "avatar": "/assets/img/profile/3.png",
    "email": "alicej@example.com",
    "last_online": "2023-10-23T18:45:00Z",
    "role": "Moderator",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/alicejohnson",
      "instagram": "https://instagram.com/alicejohnson",
      "linkedin": "https://linkedin.com/in/alicejohnson"
    }
  },
  {
    "name": "Bob Brown",
    "avatar": "/assets/img/profile/4.png",
    "email": "bobbrown@example.com",
    "last_online": "2023-10-22T12:00:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/bobbrown",
      "instagram": "https://instagram.com/bobbrown",
      "linkedin": "https://linkedin.com/in/bobbrown"
    }
  },
  {
    "name": "Charlie Davis",
    "avatar": "/assets/img/profile/5.png",
    "email": "charlied@example.com",
    "last_online": "2023-10-21T20:20:00Z",
    "role": "Guest",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/charliedavis",
      "instagram": "https://instagram.com/charliedavis",
      "linkedin": "https://linkedin.com/in/charliedavis"
    }
  },
  {
    "name": "Diana Evans",
    "avatar": "/assets/img/profile/6.png",
    "email": "dianae@example.com",
    "last_online": "2023-10-20T16:10:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/dianaevans",
      "instagram": "https://instagram.com/dianaevans",
      "linkedin": "https://linkedin.com/in/dianaevans"
    }
  },
  {
    "name": "Ethan Harris",
    "avatar": "/assets/img/profile/7.png",
    "email": "ethanh@example.com",
    "last_online": "2023-10-19T11:45:00Z",
    "role": "Moderator",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/ethanharris",
      "instagram": "https://instagram.com/ethanharris",
      "linkedin": "https://linkedin.com/in/ethanharris"
    }
  },
  {
    "name": "Fiona Clark",
    "avatar": "/assets/img/profile/8.png",
    "email": "fionac@example.com",
    "last_online": "2023-10-18T08:30:00Z",
    "role": "User",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/fionaclark",
      "instagram": "https://instagram.com/fionaclark",
      "linkedin": "https://linkedin.com/in/fionaclark"
    }
  },
  {
    "name": "George Lewis",
    "avatar": "/assets/img/profile/9.png",
    "email": "georgel@example.com",
    "last_online": "2023-10-17T19:20:00Z",
    "role": "Admin",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/georgelewis",
      "instagram": "https://instagram.com/georgelewis",
      "linkedin": "https://linkedin.com/in/georgelewis"
    }
  },
  {
    "name": "Hannah Walker",
    "avatar": "/assets/img/profile/10.png",
    "email": "hannahw@example.com",
    "last_online": "2023-10-16T14:15:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/hannahwalker",
      "instagram": "https://instagram.com/hannahwalker",
      "linkedin": "https://linkedin.com/in/hannahwalker"
    }
  },
  {
    "name": "Ian Hall",
    "avatar": "/assets/img/profile/11.png",
    "email": "ianh@example.com",
    "last_online": "2023-10-15T10:00:00Z",
    "role": "Guest",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/ianhall",
      "instagram": "https://instagram.com/ianhall",
      "linkedin": "https://linkedin.com/in/ianhall"
    }
  },
  {
    "name": "Jessica Young",
    "avatar": "/assets/img/profile/12.png",
    "email": "jessicay@example.com",
    "last_online": "2023-10-14T07:45:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/jessicayoung",
      "instagram": "https://instagram.com/jessicayoung",
      "linkedin": "https://linkedin.com/in/jessicayoung"
    }
  },
  {
    "name": "Kevin King",
    "avatar": "/assets/img/profile/13.png",
    "email": "kevink@example.com",
    "last_online": "2023-10-13T22:30:00Z",
    "role": "Moderator",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/kevinking",
      "instagram": "https://instagram.com/kevinking",
      "linkedin": "https://linkedin.com/in/kevinking"
    }
  },
  {
    "name": "Laura Scott",
    "avatar": "/assets/img/profile/14.png",
    "email": "lauras@example.com",
    "last_online": "2023-10-12T17:25:00Z",
    "role": "User",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/laurascott",
      "instagram": "https://instagram.com/laurascott",
      "linkedin": "https://linkedin.com/in/laurascott"
    }
  },
  {
    "name": "Michael Green",
    "avatar": "/assets/img/profile/15.png",
    "email": "michaelg@example.com",
    "last_online": "2023-10-11T12:10:00Z",
    "role": "Admin",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/michaelgreen",
      "instagram": "https://instagram.com/michaelgreen",
      "linkedin": "https://linkedin.com/in/michaelgreen"
    }
  },
  {
    "name": "Natalie Adams",
    "avatar": "/assets/img/profile/16.png",
    "email": "nataliea@example.com",
    "last_online": "2023-10-10T09:05:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/natalieadams",
      "instagram": "https://instagram.com/natalieadams",
      "linkedin": "https://linkedin.com/in/natalieadams"
    }
  },
  {
    "name": "Oliver Wright",
    "avatar": "/assets/img/profile/oliverwright.png",
    "email": "oliverw@example.com",
    "last_online": "2023-10-09T05:50:00Z",
    "role": "Guest",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/oliverwright",
      "instagram": "https://instagram.com/oliverwright",
      "linkedin": "https://linkedin.com/in/oliverwright"
    }
  },
  {
    "name": "Paula Martinez",
    "avatar": "/assets/img/profile/paulamartinez.png",
    "email": "paulam@example.com",
    "last_online": "2023-10-08T20:40:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/paulamartinez",
      "instagram": "https://instagram.com/paulamartinez",
      "linkedin": "https://linkedin.com/in/paulamartinez"
    }
  },
  {
    "name": "Quincy Turner",
    "avatar": "/assets/img/profile/quincyturner.png",
    "email": "quincyt@example.com",
    "last_online": "2023-10-07T15:35:00Z",
    "role": "Moderator",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/quincyturner",
      "instagram": "https://instagram.com/quincyturner",
      "linkedin": "https://linkedin.com/in/quincyturner"
    }
  },
  {
    "name": "Rachel White",
    "avatar": "/assets/img/profile/rachelwhite.png",
    "email": "rachelw@example.com",
    "last_online": "2023-10-06T10:20:00Z",
    "role": "User",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/rachelwhite",
      "instagram": "https://instagram.com/rachelwhite",
      "linkedin": "https://linkedin.com/in/rachelwhite"
    }
  },
  {
    "name": "Samuel Harris",
    "avatar": "/assets/img/profile/samuelharris.png",
    "email": "samuelh@example.com",
    "last_online": "2023-10-05T07:15:00Z",
    "role": "Admin",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/samuelharris",
      "instagram": "https://instagram.com/samuelharris",
      "linkedin": "https://linkedin.com/in/samuelharris"
    }
  },
  {
    "name": "Tina Moore",
    "avatar": "/assets/img/profile/tinamoore.png",
    "email": "tinam@example.com",
    "last_online": "2023-10-04T04:00:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/tinamoore",
      "instagram": "https://instagram.com/tinamoore",
      "linkedin": "https://linkedin.com/in/tinamoore"
    }
  },
  {
    "name": "Umar Khan",
    "avatar": "/assets/img/profile/umarkhan.png",
    "email": "umark@example.com",
    "last_online": "2023-10-03T21:50:00Z",
    "role": "Guest",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/umarkhan",
      "instagram": "https://instagram.com/umarkhan",
      "linkedin": "https://linkedin.com/in/umarkhan"
    }
  },
  {
    "name": "Victoria Lee",
    "avatar": "/assets/img/profile/victorialee.png",
    "email": "victorial@example.com",
    "last_online": "2023-10-02T18:40:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/victorialee",
      "instagram": "https://instagram.com/victorialee",
      "linkedin": "https://linkedin.com/in/victorialee"
    }
  },
  {
    "name": "William Brown",
    "avatar": "/assets/img/profile/williambrown.png",
    "email": "williamb@example.com",
    "last_online": "2023-10-01T13:30:00Z",
    "role": "Moderator",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/williambrown",
      "instagram": "https://instagram.com/williambrown",
      "linkedin": "https://linkedin.com/in/williambrown"
    }
  },
  {
    "name": "Xena Clark",
    "avatar": "/assets/img/profile/xenaclark.png",
    "email": "xenac@example.com",
    "last_online": "2023-09-30T10:20:00Z",
    "role": "User",
    "status": "Inactive",
    "social": {
      "facebook": "https://facebook.com/xenaclark",
      "instagram": "https://instagram.com/xenaclark",
      "linkedin": "https://linkedin.com/in/xenaclark"
    }
  },
  {
    "name": "Yara Evans",
    "avatar": "/assets/img/profile/yaraevans.png",
    "email": "yarae@example.com",
    "last_online": "2023-09-29T07:10:00Z",
    "role": "Admin",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/yaraevans",
      "instagram": "https://instagram.com/yaraevans",
      "linkedin": "https://linkedin.com/in/yaraevans"
    }
  },
  {
    "name": "Zack Taylor",
    "avatar": "/assets/img/profile/zacktaylor.png",
    "email": "zackt@example.com",
    "last_online": "2023-09-28T04:00:00Z",
    "role": "User",
    "status": "Active",
    "social": {
      "facebook": "https://facebook.com/zacktaylor",
      "instagram": "https://instagram.com/zacktaylor",
      "linkedin": "https://linkedin.com/in/zacktaylor"
    }
  }
];
