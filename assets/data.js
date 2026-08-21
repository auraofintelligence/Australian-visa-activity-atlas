const ATLAS_PATHWAY_CLAIMS = [
  "tourism", "meetings", "conference", "unpaid-speaking", "paid-speaking", "book-launch",
  "ai-teaching", "remote-work", "entrepreneur", "trade", "artist", "mixed-mission"
];

function buildClaimChecks(countryCode, checked, overrides = {}) {
  const record = function (suffix) {
    return { id: `${countryCode}-${suffix}`, checked: overrides[suffix] || checked };
  };
  return {
    entrySnapshot: record("ENTRY-SNAPSHOT"),
    ageNote: record("AGE-NOTE"),
    cardSummary: record("CARD-SUMMARY"),
    summary: record("SUMMARY"),
    launch: {
      fastestEntry: record("LAUNCH-FASTEST-ENTRY"),
      beforeDeparture: record("LAUNCH-BEFORE-DEPARTURE"),
      usefulStay: record("LAUNCH-USEFUL-STAY"),
      hostUnlock: record("LAUNCH-HOST-UNLOCK"),
      quickPacket: record("LAUNCH-QUICK-PACKET")
    },
    conferenceFit: {
      label: record("CONFERENCE-LABEL"),
      detail: record("CONFERENCE-DETAIL"),
      themes: record("CONFERENCE-THEMES")
    },
    steps: record("ROUTE-BUILDER"),
    cautions: record("ROUTE-EDGES"),
    pathways: Object.fromEntries(ATLAS_PATHWAY_CLAIMS.map(function (activityId) {
      const suffix = `PATH-${activityId.toUpperCase()}`;
      return [activityId, {
        status: record(`${suffix}-STATUS`),
        route: record(`${suffix}-ROUTE`),
        detail: record(`${suffix}-DETAIL`),
        next: record(`${suffix}-NEXT`)
      }];
    }))
  };
}

function buildActivityClaimChecks(activityId, checked) {
  const prefix = `ACT-${activityId.toUpperCase()}`;
  return {
    short: { id: `${prefix}-SHORT`, checked: checked },
    description: { id: `${prefix}-DESCRIPTION`, checked: checked },
    boundary: { id: `${prefix}-BOUNDARY`, checked: checked }
  };
}

window.ATLAS_DATA = {
  meta: {
    reviewed: "21 August 2026",
    profile: "Australian passport holder, age 43",
    purpose: "Non-linear world readiness for tourism, meetings, conferences, speaking, books, teaching, remote work, entrepreneurship, trade and creative activity"
  },
  activities: [
    {
      id: "tourism",
      claimChecks: buildActivityClaimChecks("tourism", "20 August 2026"),
      icon: "🧭",
      name: "Tourism and scouting",
      short: "Arrive, explore, meet the place and notice openings.",
      description: "Sightseeing, visiting friends, cultural exploration and an initial look at possible partners, venues or locations without delivering local services.",
      boundary: "A useful conversation can become a business meeting; delivering or selling something can become work or trade."
    },
    {
      id: "meetings",
      claimChecks: buildActivityClaimChecks("meetings", "20 August 2026"),
      icon: "🤝",
      name: "Business meetings and networking",
      short: "Meet partners, publishers, venues, suppliers and investors.",
      description: "Negotiations, networking, partner discovery, contract discussion, site visits and market exploration without taking local employment or delivering the contracted service.",
      boundary: "Signing or discussing a deal is different from staying to execute the work."
    },
    {
      id: "conference",
      claimChecks: buildActivityClaimChecks("conference", "20 August 2026"),
      icon: "🎟️",
      name: "Conference attendance",
      short: "Attend, learn, network or exhibit without joining the paid program.",
      description: "Joining a conference as a delegate, visitor or business representative. Exhibiting can create extra commercial or customs questions.",
      boundary: "Being a delegate is not the same activity as being a paid speaker, trainer, performer or event worker."
    },
    {
      id: "unpaid-speaking",
      claimChecks: buildActivityClaimChecks("unpaid-speaking", "20 August 2026"),
      icon: "🎤",
      name: "Unpaid speaking tour",
      short: "Keynotes, panels, readings or talks without a fee.",
      description: "A public or invited appearance with no speaker fee, honorarium or hidden consideration. Travel and accommodation support should still be stated.",
      boundary: "Some systems classify lecturing or public performance as work even when no money changes hands."
    },
    {
      id: "paid-speaking",
      claimChecks: buildActivityClaimChecks("paid-speaking", "20 August 2026"),
      icon: "📣",
      name: "Paid speaking and consulting",
      short: "Fees, honoraria, workshops, advisory sessions and contracted delivery.",
      description: "Any talk, workshop, advice or professional service connected to money, royalties, expenses, tickets, sponsorship or another benefit.",
      boundary: "Payment made in Australia or by a foreign company can still be connected to work performed in the destination."
    },
    {
      id: "book-launch",
      claimChecks: buildActivityClaimChecks("book-launch", "20 August 2026"),
      icon: "📚",
      name: "Author and book launch",
      short: "Reader events, rights meetings, promotion, signings and sales.",
      description: "A mixed author route that can include cultural exchange, business meetings, speaking, promotion and retail activity.",
      boundary: "Split the appearance, speaker fee, rights negotiation, royalties and physical book sales into separate lines."
    },
    {
      id: "ai-teaching",
      claimChecks: buildActivityClaimChecks("ai-teaching", "20 August 2026"),
      icon: "🧠",
      name: "Short-term AI teaching",
      short: "Guest lectures, community workshops, university sessions and training.",
      description: "Teaching, facilitation or technical training for a public, community, university, conference or organisational audience.",
      boundary: "A guest academic exchange, paid professional training and local employment can use different routes."
    },
    {
      id: "remote-work",
      claimChecks: buildActivityClaimChecks("remote-work", "20 August 2026"),
      icon: "💻",
      name: "Remote worker",
      short: "Continue overseas work or projects while living temporarily in-country.",
      description: "Work delivered online to an employer, client or project outside the destination, with no local employer or local customer activity.",
      boundary: "A digital-nomad route may permit foreign remote work but exclude local employment, clients or sales."
    },
    {
      id: "entrepreneur",
      claimChecks: buildActivityClaimChecks("entrepreneur", "20 August 2026"),
      icon: "🌱",
      name: "Entrepreneur and investor",
      short: "Explore, form, fund or operate a locally connected venture.",
      description: "Startup discovery, investment, company formation, innovation programs and longer-term founder or investor residence.",
      boundary: "Owning a company or investment does not always give the owner permission to work in it."
    },
    {
      id: "trade",
      claimChecks: buildActivityClaimChecks("trade", "20 August 2026"),
      icon: "🌏",
      name: "International trade",
      short: "Source, exhibit, negotiate, buy, sell and build cross-border partnerships.",
      description: "Trade fairs, product sourcing, distribution discussions, rights deals, supplier visits and commercial setup.",
      boundary: "Negotiation and ordering can fit business entry; local retail, installation and service delivery may not."
    },
    {
      id: "artist",
      claimChecks: buildActivityClaimChecks("artist", "20 August 2026"),
      icon: "🎶",
      name: "Artist and musician",
      short: "Perform, exhibit, collaborate, rehearse or join a cultural exchange.",
      description: "One-off or touring music, art, screen, literary and cultural appearances, paid or unpaid.",
      boundary: "Commercial performance, non-profit exchange, filming, royalties and merchandise can trigger separate approvals."
    },
    {
      id: "mixed-mission",
      claimChecks: buildActivityClaimChecks("mixed-mission", "20 August 2026"),
      icon: "✦",
      name: "Mixed activity trip",
      short: "A new invitation or purpose that crosses several categories.",
      description: "An open activity lane for civic AI, alignment, cinema, community infrastructure, research, cultural work or something not yet named.",
      boundary: "Break the mission into concrete actions, payments, hosts and locations, then match each part to a route."
    }
  ],
  countries: [
    {
      id: "thailand",
      name: "Thailand",
      flag: "🇹🇭",
      region: "South-East Asia",
      reviewed: "20 August 2026",
      claimChecks: buildClaimChecks("THA", "20 August 2026"),
      entrySnapshot: "60-day exemption shown; change pending",
      ageNote: "Age 43 fits the useful visitor, work, DTV and Smart S routes; the 50+ LTR pensioner route is not relevant.",
      cardSummary: "Fast tourism and meeting entry, a strong Bangkok conference scene, a remote-worker DTV and clear host-led work routes.",
      summary: "Thailand combines a quick Australian entry route with a serious international event ecosystem. Current official pages still show a 60-day exemption, while a 30-day tourism-only replacement is approved but not yet shown as commenced. Bangkok hosts can unlock short urgent lectures or the dependable Non-B plus work-permit path, while the DTV gives overseas remote workers a purpose-built longer stay.",
      launch: {
        fastestEntry: "Current visa exemption shown as up to 60 days for tourism and short-term business",
        beforeDeparture: "Submit the Thailand Digital Arrival Card within three days before arrival and live-check whether the approved 30-day policy has commenced.",
        usefulStay: "Current pages show up to 60 days with a possible 30-day extension; the announced replacement would be 30 days and tourism-only.",
        hostUnlock: "A Thai organiser may use an accepted WP.34 urgent/ad-hoc notification for a short lecture, or sponsor Non-B plus work permit for a planned tour.",
        quickPacket: ["Australian passport", "Thailand Digital Arrival Card", "Onward travel and accommodation", "Invitation with role, fee and dates"]
      },
      conferenceFit: {
        label: "Strong · international",
        detail: "Bangkok has recurring English and international technology, AI, startup and business events. Techsauce Global Summit is a strong visible anchor, with international speakers, workshops, exhibitions and business matching.",
        themes: ["AI", "technology", "startups", "business", "digital economy", "creative industries"]
      },
      pathways: {
        tourism: { status: "low", route: "Current visa exemption; live-check the transition", detail: "Official pages still show Australians eligible for up to 60 days, but a future 30-day tourism-only replacement has been approved.", next: "Check the Royal Gazette/Thai mission immediately before travel, then complete TDAC." },
        meetings: { status: "low", route: "Current exemption for attendance-only business; Non-B remains the durable business route", detail: "BOI guidance treats meetings, seminars, trade fairs, negotiations and attending lectures or training as activities not classified as work.", next: "Carry the invitation and keep the role to attendance and negotiation unless the host activates work permission." },
        conference: { status: "low", route: "Current exemption for conference attendance", detail: "Attending a seminar, lecture, exhibition or trade fair is treated differently from delivering the program.", next: "If the invitation changes from attendee to speaker, move it into the host-unlock lane." },
        "unpaid-speaking": { status: "conditional", route: "Host-arranged WP.34 for accepted urgent/ad-hoc work, or Non-B plus work permit", detail: "A one-off special academic lecture or seminar may fit the short notification route for up to 15 days, with a possible notified extension.", next: "Have the Thai host obtain Department of Employment acceptance; use the normal work route for a planned tour." },
        "paid-speaking": { status: "conditional", route: "Non-Immigrant B plus work permit", detail: "The planned paid route is host-led and initially supports a stay of up to 90 days under the visa before longer extensions.", next: "Put the fee, duties, venues and dates into the host's work-permit brief." },
        "book-launch": { status: "conditional", route: "Host-led speaking route; Thai publisher or bookshop handles retail", detail: "A signing, talk or workshop follows the active-delivery route. Rights and publisher meetings can stay in the business lane.", next: "Separate the appearance, fee, rights discussion, imports and local book sales." },
        "ai-teaching": { status: "conditional", route: "WP.34 for a genuinely ad-hoc special lecture; Non-B plus work permit for planned or recurring teaching", detail: "Attending technical training is not work, while delivering it is. Education-sector approval may also apply to formal teaching.", next: "Have the university, company or event host choose between urgent notification and the full work route." },
        "remote-work": { status: "specialist", route: "Destination Thailand Visa", detail: "The DTV is a five-year multiple-entry visa for digital nomads, remote workers and freelancers, with up to 180 days per entry and THB500,000 financial evidence.", next: "Use it for overseas work; map Thai clients, Thai employment and local paid appearances separately." },
        entrepreneur: { status: "specialist", route: "Smart S for an established certified Thai startup", detail: "Smart S uses a target-industry startup, director or 25% ownership role and THB600,000 deposit, with no separate work permit for the certified startup.", next: "Test the startup against target-industry certification and company-ownership rules." },
        trade: { status: "conditional", route: "Meet and negotiate under the visitor/business lane; operate through Non-B, work permission and company approvals", detail: "Foreign ownership, company registration and any Foreign Business Licence are separate from personal immigration status.", next: "Use the first trip to choose partners and structure, then map the operating role." },
        artist: { status: "conditional", route: "Non-B plus work permit for planned performance", detail: "Thai work guidance expressly addresses foreign singers, artists and influencers. Festival attendance under DTV is not the same as performer permission.", next: "Have the promoter sponsor the performance dates, venues, fee and duties." },
        "mixed-mission": { status: "conditional", route: "Enter for the accurate immediate purpose, then let the principal Thai host activate any delivery", detail: "Thailand offers several useful keys: visitor/business attendance, WP.34, Non-B/work permit, DTV and Smart S.", next: "Split the schedule into attendance, delivery, local income, remote work and company operation." }
      },
      steps: ["Live-check whether the 60-day exemption or announced 30-day replacement applies.", "Complete TDAC within three days before arrival.", "Use attendance-only entry for meetings, trade fairs and conferences.", "Choose one Thai host for any speaking, training, performance or planned local work.", "Use DTV for a longer overseas-remote-work base or Smart S for a certified Thai startup."],
      cautions: ["Has the announced 30-day tourism-only exemption replaced the currently published 60-day rules?", "Will the traveller attend the event or deliver part of it?", "Can the host get WP.34 acceptance for a genuinely urgent/ad-hoc lecture?", "Does the DTV activity stay with overseas clients and employers?", "Will a Thai publisher, venue or seller handle local money and retail?"],
      sources: [
        { title: "Thailand Digital Arrival Card", authority: "Royal Thai Embassy Sydney", url: "https://sydney.thaiembassy.org/en/content/thailand-digital-arrival-card-tdac", checked: "20 August 2026", supports: "pre-arrival registration" },
        { title: "Thailand's latest visa exemption and visa on arrival", authority: "Royal Thai Embassy Canberra", url: "https://canberra.thaiembassy.org/en/content/thailand-s-latest-visa-exemption-and-visa-on-arriv", checked: "20 August 2026", supports: "currently published Australian exemption" },
        { title: "Visa policy press briefing, 19 May 2026", authority: "Ministry of Foreign Affairs Thailand", url: "https://www.mfa.go.th/en/content/summary-press-briefing-190526", checked: "20 August 2026", supports: "approved 30-day policy transition" },
        { title: "Getting visa and work permit", authority: "Thailand Board of Investment One Start One Stop", url: "https://osos.boi.go.th/EN/how-to/218/Getting-Visa--Work-Permit/", checked: "20 August 2026", supports: "attendance activities not classified as work" },
        { title: "Non-Immigrant B for business and work", authority: "Ministry of Foreign Affairs Thailand", url: "https://www.mfa.go.th/en/publicservice/non-immigrant-visa-b-for-business-and-work?form=MG0AV3", checked: "20 August 2026", supports: "planned business and work route" },
        { title: "Destination Thailand Visa", authority: "Royal Thai Embassy Canberra", url: "https://canberra.thaiembassy.org/en/content/destination-thailand-visa-dtv", checked: "20 August 2026", supports: "eligible applicant categories" },
        { title: "Destination Thailand Visa factsheet", authority: "Ministry of Foreign Affairs Thailand", url: "https://image.mfa.go.th/mfa/0/RzaiZWKBzF/consular/Visa/18.Destination_Thailand_Visa_%28DTV%29.pdf", checked: "20 August 2026", supports: "five-year validity, 180-day stays and THB500,000 evidence" },
        { title: "A Business Guide to Thailand", authority: "Thailand Board of Investment", url: "https://www.boi.go.th/upload/content/A_Business_Guide_to_Thailand.pdf", checked: "20 August 2026", supports: "WP.34 duration, extension and special-lecture examples" },
        { title: "Smart S startup visa", authority: "Thailand Board of Investment", url: "https://smart-visa.boi.go.th/smart/pages/smart_s.html", checked: "20 August 2026", supports: "startup eligibility and work benefit" },
        { title: "Foreign Business Licence or Certificate", authority: "Thailand Board of Investment One Start One Stop", url: "https://osos.boi.go.th/EN/how-to/147/Obtaining-Foreign-Business-LicenseCertificate/", checked: "20 August 2026", supports: "foreign business operation layer" },
        { title: "Techsauce Global Summit 2026", authority: "Event organiser", url: "https://summit.techsauce.co/", checked: "20 August 2026", supports: "English/international conference opportunity" }
      ]
    },
    {
      id: "vietnam",
      name: "Vietnam",
      flag: "🇻🇳",
      region: "South-East Asia",
      reviewed: "20 August 2026",
      claimChecks: buildClaimChecks("VNM", "20 August 2026"),
      entrySnapshot: "eVisa up to 90 days",
      ageNote: "No relevant age restriction was found for the entry, short-expert, work or investment routes at age 43.",
      cardSummary: "A strong 90-day eVisa front door; a Vietnamese host can unlock short expert speaking or training with advance notice.",
      summary: "Vietnam gives Australians a practical online front door: an eVisa for up to 90 days, single or multiple entry. Meetings and conference attendance are easy to frame. For active speaking, training or expert delivery, the powerful route is a qualifying under-90-day expert assignment with the Vietnamese host notifying the authority before work starts; longer work, performance and investment have defined specialist layers.",
      launch: {
        fastestEntry: "Vietnam National Electronic Visa, up to 90 days, single or multiple entry",
        beforeDeparture: "Apply through the official eVisa system, choose the accurate purpose and wait for issuance before flying.",
        usefulStay: "Up to 90 days; official fee USD25 single-entry or USD50 multiple-entry.",
        hostUnlock: "A qualifying manager, executive, expert or technical worker under 90 total days in a calendar year may use a work-permit exemption with host notice at least three working days before work begins.",
        quickPacket: ["Issued official eVisa", "Passport used for the application", "Accurate purpose and entry point", "Host letter with role, credentials and dates"]
      },
      conferenceFit: {
        label: "Promising · English/bilingual",
        detail: "Hanoi and Ho Chi Minh City have a growing international AI, semiconductor, innovation and startup ecosystem. Vietnam Innovation Challenge provides an annual official anchor; individual English tracks and speaker calls should be checked event by event.",
        themes: ["AI", "semiconductors", "innovation", "startups", "digital transformation", "trade"]
      },
      pathways: {
        tourism: { status: "low", route: "Official eVisa", detail: "Australians are eligible for up to 90 days, single or multiple entry.", next: "Apply directly through the national portal and wait for issuance before travel." },
        meetings: { status: "low", route: "eVisa with accurate business purpose; sponsored DN route where the host prefers", detail: "Meetings and trade discussions can use the published entry system without becoming local service delivery.", next: "State the actual business purpose and carry the invitation." },
        conference: { status: "low", route: "eVisa with summit or conference purpose", detail: "The eVisa form includes a conference purpose; passive attendance remains separate from speaker or trainer work.", next: "If joining the program, have the organiser activate the short-expert or work route." },
        "unpaid-speaking": { status: "conditional", route: "Qualifying under-90-day expert assignment plus host notice", detail: "Active delivery can use the short foreign-worker exemption when the person and assignment meet the manager, executive, expert or technical-worker criteria.", next: "Have the Vietnamese host confirm the expert classification and notify the authority at least three working days before delivery." },
        "paid-speaking": { status: "conditional", route: "Short-expert exemption when qualified; otherwise LĐ2 plus work permit", detail: "A host can activate a genuine short expert assignment; normal local employment or a non-qualifying service uses the work-permit path.", next: "Put credentials, contract, fee, dates and duties into the host's classification." },
        "book-launch": { status: "conditional", route: "Short-expert or work route for active delivery; Vietnamese publisher or bookshop for retail", detail: "Rights and publisher meetings can stay in the business lane, while a talk, workshop and sales operation should be split.", next: "Let a local seller handle stock and receipts, then classify any paid or unpaid appearance." },
        "ai-teaching": { status: "conditional", route: "Under-90-day expert exemption plus host notice; LĐ2/work permit for longer teaching", detail: "Science, technology, innovation and digital-transformation experts also have selective exemption possibilities, and a high-threshold digital-professional route can support up to five years.", next: "Have the university, lab, company or province test the credentials against the current expert criteria." },
        "remote-work": { status: "not-fit", route: "No dedicated digital-nomad route identified", detail: "The eVisa provides entry but the official visa list does not expressly create a general overseas-remote-work status.", next: "Pre-clear immigration, labour and tax treatment if Vietnam becomes a remote-work base." },
        entrepreneur: { status: "specialist", route: "DN2 for establishment activity; investor code and work exemption follow actual capital", detail: "Investor classes begin at different capital levels; an ownership-based work exemption starts at VND3 billion for qualifying company roles.", next: "Choose negotiation, company establishment, investment amount and operating role as separate decisions." },
        trade: { status: "conditional", route: "eVisa for trade discussions; DN2 or investor/company structure for operation", detail: "Offering services, establishing a commercial presence and treaty activity can use DN2, while market-access rules sit under investment law.", next: "Use the initial trip for suppliers and partners, then model commercial presence and work status." },
        artist: { status: "specialist", route: "Host-selected entry and labour route plus performance approval", detail: "A foreign performance can require three layers: entry, labour permission and organiser-obtained cultural approval under Decree 144/2020.", next: "Have the Vietnamese promoter coordinate all three layers and classify every venue." },
        "mixed-mission": { status: "conditional", route: "eVisa front door plus one Vietnamese host coordinating expert, work, investment or cultural layers", detail: "Vietnam's 90-day eVisa is flexible for arrival; the host is the switchboard for active delivery.", next: "Send the host one schedule separating attendance, delivery, payment, sales, performance and company activity." }
      },
      steps: ["Apply through the official eVisa portal with the accurate purpose and entry point.", "Wait for issuance before booking the final flight commitment.", "Use meetings and conference attendance directly under the entry purpose.", "Choose one Vietnamese host for any active speaking, teaching, consulting or performance.", "Have the host lodge the short-expert notice or work/cultural approvals before delivery."],
      cautions: ["Does the traveller qualify as a manager, executive, expert or technical worker for the short exemption?", "Has the host counted total working days in the calendar year and lodged the three-working-day notice?", "Is the engagement a service assignment or local labour-contract employment?", "Will a Vietnamese publisher or seller handle local stock and receipts?", "Does a performance require both labour and cultural approvals?"],
      sources: [
        { title: "Vietnam National Electronic Visa system", authority: "Vietnam Immigration Department", url: "https://evisa.gov.vn/?option=MO", checked: "20 August 2026", supports: "Australian eligibility, application and eVisa options" },
        { title: "Consolidated Law on Entry, Exit, Transit and Residence of Foreigners", authority: "Government of Vietnam", url: "https://vanban.chinhphu.vn/?classid=2629&docid=217302&pageid=27160", checked: "20 August 2026", supports: "visa codes and stay framework" },
        { title: "Decree 219/2025 on foreign workers", authority: "Government of Vietnam", url: "https://vanban.chinhphu.vn/?classid=1&docid=214840&orggroupid=2&pageid=27160", checked: "20 August 2026", supports: "short expert and work-permit framework" },
        { title: "Procedure for short-term foreign workers", authority: "Government News Vietnam", url: "https://baochinhphu.vn/thu-tuc-doi-voi-lao-dong-nuoc-ngoai-lam-viec-ngan-han-102260401093539635.htm", checked: "20 August 2026", supports: "under-90-day host notice process" },
        { title: "Fresh regulations on work permits", authority: "Government News Vietnam", url: "https://en.baochinhphu.vn/fresh-regulations-on-work-permit-issuance-to-foreign-workers-111250808104813884.htm", checked: "20 August 2026", supports: "work-permit timing and process" },
        { title: "Law on Digital Technology Industry approved", authority: "Government News Vietnam", url: "https://en.baochinhphu.vn/law-on-digital-technology-industry-approved-111250614143640329.htm", checked: "20 August 2026", supports: "high-quality digital professional route" },
        { title: "Vietnam's Law on Investment 2025", authority: "Government News Vietnam", url: "https://en.baochinhphu.vn/viet-nams-law-on-investment-2025-111260731145214387.htm", checked: "20 August 2026", supports: "investment and commercial presence" },
        { title: "Approval procedure for foreign artists", authority: "Government News Vietnam", url: "https://baochinhphu.vn/thu-tuc-cap-phep-to-chuc-bieu-dien-cho-nghe-si-nuoc-ngoai-102250923140746162.htm", checked: "20 August 2026", supports: "cultural performance approval" },
        { title: "Vietnam Innovation Challenge", authority: "National Innovation Center Vietnam", url: "https://vic.nic.gov.vn/en", checked: "20 August 2026", supports: "AI and innovation opportunity signal" }
      ]
    },
    {
      id: "china",
      name: "China",
      flag: "🇨🇳",
      region: "East Asia",
      reviewed: "20 August 2026",
      claimChecks: buildClaimChecks("CHN", "20 August 2026"),
      entrySnapshot: "30 days visa-free to 31 Dec 2026",
      ageNote: "Age 43 is within Category B's usual 60-or-under limit, but a relevant degree, two years' experience, employer and role, or an accepted points or exception pathway still decide the work permit.",
      cardSummary: "Exceptionally quick entry for business, conferences and exchange; paid delivery becomes a host-led work route.",
      summary: "China currently has a remarkably fast front door for Australians: up to 30 days visa-free for tourism, business, exchange, conferences and exhibitions. The deeper opportunity is host-led — Shanghai and Beijing offer major AI, trade and publishing stages, while paid teaching, speaking and performance use work and sometimes cultural approvals.",
      launch: {
        fastestEntry: "30-day visa-free entry for tourism, business, exchange, conferences and exhibitions",
        beforeDeparture: "Confirm the visa-free policy is still in force for the travel date and carry the invitation or activity purpose.",
        usefulStay: "Up to 30 calendar days under the current policy, through 31 December 2026.",
        hostUnlock: "A Chinese organiser can start short-term employment approval for paid speaking, teaching or performance; that route ordinarily leads to a Z visa. M or F applies only when the host and authorities classify the activity as commerce or non-commercial exchange rather than work.",
        quickPacket: ["Ordinary Australian passport", "Onward travel and accommodation", "Invitation or event registration", "One-page activity and payment note"]
      },
      conferenceFit: {
        label: "Strong, often bilingual",
        detail: "Shanghai and Beijing have large international AI, services-trade and publishing events. English participation is common at international forums, but an individual session may be Chinese, bilingual or interpreted.",
        themes: ["AI", "digital trade", "services trade", "publishing", "technology", "investment"]
      },
      pathways: {
        tourism: { status: "low", route: "Current 30-day visa-free entry", detail: "The policy covers tourism for Australian ordinary-passport holders and currently permits multiple entries.", next: "Recheck the policy end date and passport conditions shortly before departure." },
        meetings: { status: "low", route: "30-day visa-free business visit; M visa for a longer or visa-required trip", detail: "Meetings, negotiations and commercial visits fit the published business purpose.", next: "Carry a host invitation and keep service delivery outside the meeting-only brief." },
        conference: { status: "low", route: "30-day visa-free conference or exhibition entry", detail: "Conferences and exhibitions are expressly named in the current visa-free policy.", next: "Keep registration, invitation, accommodation and onward travel together." },
        "unpaid-speaking": { status: "confirm", route: "Visa-free exchange or F visa only when the host and authorities classify it as non-commercial exchange", detail: "F covers exchanges and visits; it is not an automatic performance exemption. A programmed appearance may still need cultural approval even without a fee.", next: "Ask the host to confirm the classification and any cultural approval in writing before using the exchange lane." },
        "paid-speaking": { status: "specialist", route: "Host-sponsored short-term work approval plus Z visa", detail: "A paid lecture, advisory session or professional service generally fits short-term work rather than business attendance.", next: "Have the contracting host start the work-approval process before the Z application." },
        "book-launch": { status: "confirm", route: "Split rights meetings, cultural appearance, speaking fee and retail sales", detail: "Publisher and rights meetings can fit business entry; a non-commercial appearance may fit exchange; paid delivery or personal sales change the route.", next: "Use a Chinese publisher or bookseller for local sales and classify the appearance separately." },
        "ai-teaching": { status: "specialist", route: "Short-term work approval and Z visa for up to 90 days", detail: "Paid technical, management or advisory teaching is treated as work; longer roles use the normal work-permit and residence process.", next: "Ask the university, company or event host to sponsor the exact teaching dates and duties." },
        "remote-work": { status: "not-fit", route: "No dedicated national digital-nomad route identified", detail: "The current visa-free policy excludes people coming to work, and the official visa list has no remote-worker class.", next: "Map a city-specific residence or work route if China becomes a longer base." },
        entrepreneur: { status: "specialist", route: "Business scouting first; city-specific entrepreneurship residence for a longer build", detail: "Foreigners can invest and establish enterprises subject to sector rules; Shanghai also publishes entrepreneurship residence pathways.", next: "Choose the city and entity role, then map investment approval separately from personal work status." },
        trade: { status: "low", route: "30-day visa-free business visit or M visa", detail: "Trade fairs, sourcing, negotiations and setup meetings fit the business lane.", next: "Separate negotiations from any local installation, operation or service delivery." },
        artist: { status: "specialist", route: "Written exchange classification for non-commercial activity; cultural approval plus short-term employment approval plus Z visa for commercial performance", detail: "For a commercial performance of 90 days or less, the official short-work process requires both cultural-authority documents and short-term employment approval before the Z route.", next: "Have the promoter classify the engagement and coordinate all cultural, employment and visa documents." },
        "mixed-mission": { status: "confirm", route: "Build a host-backed activity schedule, then choose visa-free exchange, M, F or Z", detail: "China has several workable keys; the correct one follows the real actions and remuneration.", next: "Send one precise schedule to the principal Chinese host for route classification." }
      },
      steps: ["Choose the city, event and principal host.", "Split meetings, exchange, paid delivery, sales and performance into separate lines.", "Use visa-free entry where the published purpose fits; otherwise have the host initiate M, F or work documents.", "Carry the invitation, activity schedule, accommodation and onward travel.", "Recheck the visa-free end date before departure."],
      cautions: ["Does the host describe the appearance as exchange, commercial service or performance?", "Is any fee, honorarium, royalty, ticket share or expense support attached?", "Will a Chinese entity sell the books or merchandise?", "Does a commercial performance also need culture-authority approval?", "Is the planned city offering a local entrepreneur or talent pathway?"],
      sources: [
        { title: "FAQs on visa-free entry into China", authority: "Ministry of Foreign Affairs of China", url: "https://cs.mfa.gov.cn/lh/lhqz_149493/cjwd/", checked: "20 August 2026", supports: "eligible purposes, 30-day stay and work exclusion" },
        { title: "Extension of visa-free policy for Australians", authority: "Embassy of China in Australia", url: "https://au.china-embassy.gov.cn/eng/tzgg/202511/t20251105_11747334.htm", checked: "20 August 2026", supports: "policy end date" },
        { title: "China visa categories F, M, Z and R", authority: "Chinese Visa Application Service Centre", url: "https://pdf.visaforchina.cn/MES3_EN/qianzhengyewu/jichuzhishi/changjianwenti/206736865926189056.html", checked: "20 August 2026", supports: "exchange, business and work visa purposes" },
        { title: "Work permit for 90 days or less", authority: "Shanghai Municipal Government", url: "https://english.shanghai.gov.cn/en-Latest-TalentsinShanghai/20260202/6846c3872de54772a4635b227d2f15de.html", checked: "20 August 2026", supports: "short-term host-led work process" },
        { title: "Short-term working tasks for foreigners", authority: "Beijing Municipal Government", url: "https://english.beijing.gov.cn/mostrequested/residencepermit/employment/202005/t20200521_1904763.html", checked: "20 August 2026", supports: "Z-visa sequence and commercial-performance approvals" },
        { title: "Foreign professional work-permit criteria", authority: "Shanghai Municipal Government", url: "https://english.shanghai.gov.cn/en-WorkPermit-Hongqiao/20231213/a88687f2d8094fbebe38b1a667530ed1.html", checked: "20 August 2026", supports: "Category B age, degree, experience and points criteria" },
        { title: "Entrepreneurship residence pathways", authority: "Shanghai Municipal Government", url: "https://english.shanghai.gov.cn/en-FAQs-TalentInShanghai/20240607/432231df2d514907bb49dbe3ee9a8338.html", checked: "20 August 2026", supports: "city-specific founder route" },
        { title: "Foreign Investment Law", authority: "State Council of China", url: "https://english.www.gov.cn/services/mvestment/202102/24/content_WS6035aa38c6d0719374af9609.html", checked: "20 August 2026", supports: "foreign investment framework" },
        { title: "World Artificial Intelligence Conference 2026", authority: "Shanghai Municipal Government", url: "https://english.shanghai.gov.cn/en-Events/20260624/9cc202d708504b56ba32f70fbd61ef79.html", checked: "20 August 2026", supports: "AI opportunity signal" },
        { title: "China International Fair for Trade in Services", authority: "Beijing Municipal Government", url: "https://english.beijing.gov.cn/investinginbeijing/hotspot/CIFTIS/index.html", checked: "20 August 2026", supports: "trade and conference opportunity signal" },
        { title: "Beijing International Book Fair 2026", authority: "Beijing Municipal Government", url: "https://english.beijing.gov.cn/whatson/events/exhibition/202606/t20260611_4695970.html", checked: "20 August 2026", supports: "publishing opportunity signal" }
      ]
    },
    {
      id: "philippines",
      name: "Philippines",
      flag: "🇵🇭",
      region: "South-East Asia",
      reviewed: "20 August 2026",
      claimChecks: buildClaimChecks("PHL", "20 August 2026"),
      entrySnapshot: "30 days visa-free",
      ageNote: "Age 43 clears the published 21+ SIRV minimum; age is not the unresolved question for visitor entry or the candidate short-work routes.",
      cardSummary: "Fast entry and an English-forward event ecosystem; a local petitioner can unlock short speaking, training and performance work.",
      summary: "The Philippines is a strong instant-opening country: Australians have 30-day visa-free entry for tourism or temporary business, and English is widely used across professional events. The Bureau of Immigration names lecturers, trainers and consultants in its work-permit material, but its current Commercial SWP page describes three-to-six-month employment. A day or week tour therefore needs written classification from BI rather than an assumed fit.",
      launch: {
        fastestEntry: "30-day visa-free entry for tourism or temporary business",
        beforeDeparture: "Complete the official eTravel registration within 72 hours before arrival and carry onward travel.",
        usefulStay: "30 days initially, with published visitor-extension pathways for a longer stay.",
        hostUnlock: "A Philippine organiser can ask BI to classify the engagement. Commercial SWP is currently published for three-to-six-month work, while an older checklist names lecturers, trainers and consultants. Day or week appearances need written BI confirmation; artists have a separate under-six-month SWP.",
        quickPacket: ["Passport valid at least six months beyond the stay", "Return or onward ticket", "eTravel registration", "Invitation and Philippine host details"]
      },
      conferenceFit: {
        label: "Very high · English-forward",
        detail: "Manila has recurring English-accessible AI, IT-BPM, startup and publishing events. The professional ecosystem is one of the easiest in the current deep-guide set for English conversation and stage participation.",
        themes: ["AI", "IT-BPM", "startups", "business", "books", "creative industries"]
      },
      pathways: {
        tourism: { status: "low", route: "30-day visa-free entry", detail: "Australian passport holders are on the published visa-free list for tourism or business.", next: "Complete eTravel in the 72-hour window and carry onward travel." },
        meetings: { status: "low", route: "Visa-free temporary business visit", detail: "Official guidance names meetings, contract negotiations and international conference attendance.", next: "Keep the visit in the meeting and negotiation lane unless a petitioner activates work permission." },
        conference: { status: "low", route: "Visa-free attendance as a delegate", detail: "International conference attendance fits temporary business.", next: "If the organiser adds a talk, workshop or fee, ask them to switch to the speaker route." },
        "unpaid-speaking": { status: "confirm", route: "BI classification required for a sub-three-month appearance; Commercial SWP is a candidate, not a confirmed fit", detail: "The older official checklist includes lecturers, researchers and trainers with or without compensation, while the current service page states three-to-six-month gainful employment.", next: "Have the Philippine organiser give BI the exact days, duties and compensation and obtain the route in writing." },
        "paid-speaking": { status: "confirm", route: "BI classification required for a sub-three-month tour; Commercial SWP is published for three to six months", detail: "Consultants, specialists and service suppliers appear in the official material, including offshore payment arrangements, but a day or week engagement falls outside the current page's stated duration.", next: "Use one Philippine petitioner and get BI's written classification for every city, venue, payment source and duty." },
        "book-launch": { status: "confirm", route: "BI classification for the active appearance; Philippine publisher or bookseller for sales", detail: "The lecturer and trainer checklist suggests a possible SWP lane, but a short reading or launch still needs BI confirmation because of the current three-month minimum wording.", next: "Separate the appearance, rights meetings, royalties and physical sales, then have the host ask BI for the exact route." },
        "ai-teaching": { status: "confirm", route: "BI classification for short training; AEP plus 9(g) for longer employment", detail: "The older SWP checklist covers lecturers and trainers; current Commercial SWP duration starts at three months. Longer Philippine employment uses the labour-permit and pre-arranged employment system.", next: "Ask the host to classify the dates first, then choose SWP or the AEP and 9(g) sequence." },
        "remote-work": { status: "confirm", route: "Digital Nomad Visa authorised; operational applications and Australian reciprocity both need confirmation", detail: "Executive Order 86 authorises a one-year renewable DNV and ties nationality eligibility to reciprocal treatment, but current operational application availability for Australians was not established.", next: "Ask the Philippine mission to confirm both a live application channel and Australian eligibility." },
        entrepreneur: { status: "specialist", route: "SIRV or SVEG depending capital and employment generation", detail: "Investor residence starts at US$75,000 under SIRV; SVEG requires at least ten full-time Filipino workers. A separate startup-visa route was not confirmed as operational.", next: "Choose capital investment or employment generation before modelling the entity and operating role." },
        trade: { status: "conditional", route: "Visa-free negotiations first; SEC/DTI and work permissions for local operation", detail: "Trade meetings and contract negotiation are easy; a local branch, selling operation or management role adds commercial and work layers.", next: "Keep the first trip to partners, markets and setup choices, then map the entity and operating role." },
        artist: { status: "conditional", route: "Artist and athlete Special Work Permit", detail: "The Bureau of Immigration publishes a route for temporary artists and performers appearing before an audience for a fee.", next: "Have the Philippine promoter petition and list any additional agency approvals." },
        "mixed-mission": { status: "confirm", route: "One Philippine lead host plus written BI classification of the complete schedule", detail: "The candidate SWP categories are useful, but current duration wording prevents assuming that a day or week professional tour fits.", next: "Choose one organiser to submit all venues, dates, payments and duties to BI." }
      },
      steps: ["Take the 30-day visa-free front door when the trip begins as tourism, meetings or conference attendance.", "Choose one Philippine lead host for an active tour.", "List every talk, workshop, reading, performance, venue and payment source.", "For any sub-three-month professional engagement, have the host obtain BI's route classification in writing.", "Use local publishers, distributors and event operators for retail and local commercial handling."],
      cautions: ["Is the event attendance only, or does Luke join the program?", "What route does BI confirm for an engagement shorter than the published three-month Commercial SWP minimum?", "Will books be sold by a Philippine publisher or directly by the traveller?", "Is AI teaching a short service, employment or formal exchange?", "Has the Mission confirmed both a live DNV application channel and Australian reciprocity?"],
      sources: [
        { title: "Visa information for Australians", authority: "Embassy of the Philippines in Canberra", url: "https://www.philembassy.org.au/consular/visa", checked: "20 August 2026", supports: "30-day visa-free entry" },
        { title: "eTravel frequently asked questions", authority: "Philippine One-Stop Electronic Travel Declaration System", url: "https://etravel.gov.ph/en/frequently-asked-questions", checked: "20 August 2026", supports: "arrival registration window" },
        { title: "Bureau of Immigration frequently asked questions", authority: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/faqs/", checked: "20 August 2026", supports: "temporary business and longer employment" },
        { title: "Special Work Permit checklist", authority: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/wp-content/uploads/pdf/07%20Special%20Permits%20Certifiacte%20%26%20Clearance/SWP_Commercial2020.pdf", checked: "20 August 2026", supports: "older category list for lecturers, trainers and consultants with or without compensation" },
        { title: "Commercial Special Work Permit", authority: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/services/special-work-permit-commercial/", checked: "20 August 2026", supports: "current three-to-six-month duration and application route" },
        { title: "Artist and athlete Special Work Permit", authority: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/services/special-work-permit-commercial-2/", checked: "20 August 2026", supports: "paid artist and performer route" },
        { title: "Executive Order No. 86: Digital Nomad Visa", authority: "Supreme Court E-Library / Office of the President", url: "https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/5/98965", checked: "20 August 2026", supports: "DNV authority and conditions" },
        { title: "Special Investor's Resident Visa FAQ", authority: "Philippine Board of Investments", url: "https://www.boi.gov.ph/wp-content/uploads/2023/08/SIRV-FAQ-ao-2023-v.pdf", checked: "20 August 2026", supports: "investor age, capital and residence" },
        { title: "Pre-arranged Employment Visa 9(g)", authority: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/pre-4-arranged-employment-visa-9g/", checked: "20 August 2026", supports: "longer compensated employment route" },
        { title: "Alien Employment Regulation", authority: "Philippine Department of Labor and Employment", url: "https://ble.dole.gov.ph/alien-employment-regulation/", checked: "20 August 2026", supports: "AEP and long-term foreign employment layer" },
        { title: "Special Visa for Employment Generation", authority: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/visas/special-visa-for-employment-generation/", checked: "20 August 2026", supports: "ten-worker SVEG requirement" },
        { title: "Manila International Book Fair", authority: "Event organiser", url: "https://www.manilabookfair.com/about", checked: "20 August 2026", supports: "publishing opportunity signal" },
        { title: "AICon Manila", authority: "Analytics and AI Association of the Philippines", url: "https://aicon.aap.ph/", checked: "20 August 2026", supports: "AI conference opportunity signal" }
      ]
    },
    {
      id: "india",
      name: "India",
      flag: "🇮🇳",
      region: "South Asia",
      reviewed: "20 August 2026",
      claimChecks: buildClaimChecks("IND", "20 August 2026"),
      entrySnapshot: "eVisa before travel",
      ageNote: "No general age ceiling found for the tourism, business, conference or employment routes relevant to age 43.",
      cardSummary: "Online entry, enormous English-facing AI and publishing ecosystems, and several useful distinctions for business and cultural appearances.",
      summary: "India is one of the strongest opportunity countries in the current deep-guide set: online tourist, business and conference entry, deep English-language technology and publishing networks, and official visa guidance that distinguishes business, cultural events and employment. The route becomes especially useful when a host frames the event clearly.",
      launch: {
        fastestEntry: "Official e-Tourist for tourism and personal reconnaissance; e-Business for meetings, trade and venture discovery",
        beforeDeparture: "Apply through the official Indian eVisa portal and match the selected purpose to the first trip.",
        usefulStay: "30-day e-Tourist, longer one- and five-year tourist options, or 365-day multiple-entry e-Business with per-visit limits.",
        hostUnlock: "An organiser can support e-Conference, a cultural-event Business route, GIAN lecture documents or an Employment visa, depending on the engagement.",
        quickPacket: ["Approved Electronic Travel Authorisation", "Passport used in the application", "Host or conference invitation", "Activity, fee and sales breakdown"]
      },
      conferenceFit: {
        label: "Very high · English-rich",
        detail: "India has major English-facing technology, AI, startup, publishing and literary ecosystems. Bengaluru, New Delhi and Jaipur create particularly strong openings, while major cultural events are often multilingual.",
        themes: ["AI", "technology", "startups", "books", "literature", "business", "research"]
      },
      pathways: {
        tourism: { status: "low", route: "e-Tourist visa", detail: "Australians are eligible for 30-day, one-year and five-year e-Tourist options with published stay limits.", next: "Choose the duration on the official portal and keep the visit inside tourist purposes." },
        meetings: { status: "low", route: "e-Business visa", detail: "The published purposes include meetings, trade fairs, commercial transactions, venture exploration and company director or partner activity, but exclude petty business and petty trade.", next: "Use the host letter to describe meetings and venture discovery; classify personal stall sales or direct merchandise separately." },
        conference: { status: "conditional", route: "e-Business e-B5/e-Conference purpose or regular Conference visa with organiser documents", detail: "Current official material uses inconsistent labels. The conference option is published for 30 days with multiple entry and needs an invitation plus MEA political clearance; MHA event clearance is added where specifically required.", next: "Have the organiser confirm the current portal label and supply the invitation and clearance packet." },
        "unpaid-speaking": { status: "conditional", route: "Conference route or X-Misc for a short non-remunerated cultural appearance", detail: "The route follows whether the talk belongs to an approved conference, a cultural event or another exchange.", next: "Have the organiser and Indian Mission classify the appearance and confirm that no consideration is attached." },
        "paid-speaking": { status: "conditional", route: "Business visa for a remunerated cultural event; Employment visa for qualifying contracted professional service", detail: "India distinguishes a one-off cultural appearance from consulting or service delivery. Employment also requires highly skilled or qualified work and a remuneration test; official documents conflict between ₹16.25 lakh annually, pro-rated, and US$25,000.", next: "Put the fee, contract, event type and duties to the host and Mission and get the current Employment threshold confirmed." },
        "book-launch": { status: "conditional", route: "Business or X-Misc appearance; e-Business for rights and publisher meetings", detail: "A local publisher or bookseller can handle retail while the author attends for promotion, rights and cultural activity. Petty trade is excluded, so direct author-stall sales are not automatically covered.", next: "Separate appearance payment, royalties, rights discussions and physical sales; confirm any traveller-handled retail with the Mission." },
        "ai-teaching": { status: "specialist", route: "e-Business for a documented GIAN lecture; Employment visa for qualifying paid teaching or technical service", detail: "The online business route expressly includes GIAN lectures. Other paid teaching must meet the highly-skilled Employment test and a current remuneration threshold that the official documents state inconsistently.", next: "Ask the institution whether it is using GIAN, cultural-event or Employment sponsorship and have the Mission confirm the threshold." },
        "remote-work": { status: "not-fit", route: "No dedicated digital-nomad route identified", detail: "The official lists do not publish a remote-worker visa, and tourist and business purposes do not expressly cover routine remote work.", next: "Map an employment, business-residence or future dedicated route if India becomes a base." },
        entrepreneur: { status: "conditional", route: "e-Business for exploration and establishment; entity and personal work status mapped separately", detail: "The business route expressly covers establishing a venture and acting as a director or partner.", next: "Choose the company form and sector, then separate ownership, directorship and operational employment." },
        trade: { status: "low", route: "e-Business visa for substantial trade activity", detail: "Trade fairs, sourcing, negotiations, supplier assessment and commercial-product transactions fit the published purposes, while petty business and petty trade are excluded.", next: "Keep local project execution and installation for a work route, and confirm direct personal retail before selling." },
        artist: { status: "conditional", route: "Business for a one-off remunerated cultural event; Employment for qualifying regular contracted performance; X-Misc when short and unpaid", detail: "The route tracks the contract and remuneration. A regular Employment route also carries the highly-skilled test and disputed current threshold.", next: "Have the promoter state the event type and ask the Mission to confirm both visa class and any Employment threshold." },
        "mixed-mission": { status: "confirm", route: "Combine e-Business, conference, cultural-event or Employment logic around the actual schedule", detail: "India publishes several useful purpose distinctions, making a mixed mission easier to split cleanly.", next: "Give the principal host a single schedule showing meetings, public appearances, teaching, sales and payment." }
      },
      steps: ["Choose e-Tourist for tourism and personal reconnaissance, or e-Business for meetings, trade and venture discovery.", "Secure the organiser or institution invitation for any programmed appearance.", "Split cultural appearance, consulting, teaching, rights meetings and sales.", "Use the official eVisa portal where the purpose is supported; use a regular Mission-led visa for Employment or X-Misc.", "Carry the electronic approval and the passport used in the application."],
      cautions: ["Is the speaker a conference delegate, cultural participant or contracted professional?", "Is the lecture inside the Government's GIAN program?", "Who receives book-sale revenue, and is any direct retail excluded as petty trade?", "If Employment applies, which current remuneration threshold does the Mission use?", "Does the current eVisa portal label the conference option consistently for this event?"],
      sources: [
        { title: "Official Indian eVisa portal", authority: "Government of India", url: "https://www.indianvisaonline.gov.in/evisa/tvoa.html", checked: "20 August 2026", supports: "eligibility, eVisa purposes, validity and application" },
        { title: "Details of visas granted by India", authority: "Ministry of Home Affairs", url: "https://www.mha.gov.in/PDF_Other/AnnexIII_01022018.pdf", checked: "20 August 2026", supports: "business, cultural event, X-Misc and employment distinctions" },
        { title: "Work-related visa FAQs", authority: "Ministry of Home Affairs", url: "https://www.mha.gov.in/sites/default/files/2022-07/ForeigD-work_visa_faq.pdf", checked: "20 August 2026", supports: "employment and contracted-service rules" },
        { title: "Regular visa provision table", authority: "Bureau of Immigration India", url: "https://www.indianvisaonline.gov.in/visa/visa-provision.html", checked: "20 August 2026", supports: "regular visa categories, indicative validity and application documents" },
        { title: "Doing Business in India 2025–2026", authority: "Invest India", url: "https://static.investindia.gov.in/s3fs-public/2025-10/doing_business_in_india_investor_s_guide_at_a_glance_2025-26.pdf", checked: "20 August 2026", supports: "venture and investment structures" },
        { title: "Bengaluru Tech Summit 2026", authority: "Government of Karnataka and event partners", url: "https://www.bengalurutechsummit.com/index.php", checked: "20 August 2026", supports: "English technology opportunity signal" },
        { title: "New Delhi World Book Fair 2026", authority: "Press Information Bureau, Government of India", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2213262&lang=1&reg=6", checked: "20 August 2026", supports: "large international publishing, author and speaker opportunity signal" },
        { title: "Jaipur Literature Festival", authority: "Festival organiser", url: "https://jlflitfest.org/about-jlf", checked: "20 August 2026", supports: "literary and author opportunity signal" }
      ]
    },
    {
      id: "united-kingdom",
      name: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      reviewed: "21 August 2026",
      claimChecks: buildClaimChecks("GBR", "21 August 2026"),
      entrySnapshot: "£20 ETA before travel; visitor activities normally up to six months",
      ageNote: "Age 43 fits the visitor, permitted-paid-engagement, Creative Worker, Innovator Founder, Global Talent, Service Supplier and sponsored-work routes reviewed. The Australian Youth Mobility route is limited to ages 18 to 35 and is unavailable.",
      cardSummary: "Fast ETA entry, unusually clear speaking permissions, major English-language AI and technology circuits, plus credible creative, founder and Australia–UK trade-agreement routes.",
      summary: "The United Kingdom is one of the strongest rapid-response destinations in the atlas. An Australian can obtain an ETA and use Standard Visitor permissions for tourism, meetings, conference attendance and tightly defined business activity. A formally invited expert can undertake a permitted paid engagement during the first month, including conference speaking, expert lectures and professional creative launches. Unpaid talks have a narrower non-commercial boundary. Longer delivery moves into Creative Worker, Service Supplier, Skilled Worker, Global Talent or founder routes.",
      launch: {
        fastestEntry: "Apply for the £20 ETA linked to the Australian passport; decisions usually arrive within one day but allow up to three working days and wait for approval before travel.",
        beforeDeparture: "Match every public appearance to visitor, permitted-paid-engagement or sponsored-work rules. Obtain a written UK invitation stating organiser, purpose, expertise, dates, venues, payment and expenses.",
        usefulStay: "Visitor permission is normally up to six months, but a permitted paid engagement must occur during the first month. The Creative Worker concession supports qualifying sponsored creative work for up to three months.",
        hostUnlock: "A UK conference organiser can issue the formal invitation for a permitted paid engagement. A licensed creative or business sponsor can issue a Certificate of Sponsorship where the visitor lane is too narrow.",
        quickPacket: ["Australian passport and approved ETA", "Return or onward plan and accommodation", "Formal invitation with every date, venue and duty", "Speaker fee, honorarium, expenses and ticket treatment", "Evidence of Australian occupation, expertise and published work", "Certificate of Sponsorship where required"]
      },
      conferenceFit: {
        label: "Very high · English-primary",
        detail: "London and other UK cities support a dense recurring English-language circuit. London Tech Week returns in June 2027, The AI Summit London advertises 300-plus speakers, and sector events cover data centres, responsible AI, higher education, digital infrastructure, founders, policy and creative work.",
        themes: ["AI and responsible AI", "AI governance and policy", "data centres and energy", "digital infrastructure", "technology and founders", "education", "books and creative practice"]
      },
      opportunities: [
        {
          id: "GBR-OPP-PEAK-DATA-AI-2027",
          checked: "21 August 2026",
          type: "Call for presentations",
          title: "The Peak of Data & AI 2027",
          deadline: "29 September 2026",
          deadlineISO: "2026-09-29",
          deadlineAt: "2026-09-29T23:59:59+01:00",
          compensation: "Accepted speakers pay a discounted £350 speaker pass. Invitation letters and associated hotel blocks are available; airfare and accommodation funding are not published.",
          detail: "London event on 9–11 March 2027 seeking real-world successes, technical deep-dives and innovative AI applications across data, AI, MCP and integration.",
          url: "https://peakofdataandai.com/"
        }
      ],
      pathways: {
        tourism: { status: "low", route: "ETA plus Standard Visitor permission", detail: "Australian passport holders are eligible for an ETA and may normally visit for tourism for up to six months, subject to visitor eligibility and a border decision.", next: "Apply before travel, allow up to three working days and wait for approval." },
        meetings: { status: "low", route: "Standard Visitor business activities", detail: "Meetings, conferences, interviews, negotiations, contract signing, site visits and information gathering are permitted, but delivering work to a UK organisation is not.", next: "Carry the host invitation and keep the first trip to discussion, investigation and negotiation." },
        conference: { status: "low", route: "ETA plus Standard Visitor attendance", detail: "Conference attendance is permitted. Exhibiting to promote an overseas business is allowed, but direct selling is not; stepping on stage requires separate speaking classification.", next: "Register as an attendee and reclassify any panel, talk, facilitation or workshop before accepting it." },
        "unpaid-speaking": { status: "conditional", route: "Standard Visitor for a one-off or short series of non-commercial talks", detail: "A talk may fit when it is not organised as a commercial event and will not make a profit for the organiser. A zero fee does not by itself make a commercial conference permissible.", next: "Have the host confirm the event's commercial status, expenses, dates and duties in writing; use paid-engagement or sponsored logic if the boundary fails." },
        "paid-speaking": { status: "conditional", route: "Permitted paid engagement within Standard Visitor permission", detail: "A formally invited expert may speak at a conference or give expert lectures when the engagement relates to the profession and expertise held overseas. The engagement must occur during the first month of the visit.", next: "Obtain the UK organiser's formal invitation and carry evidence of the Australian occupation, expertise, fee and first-month dates." },
        "book-launch": { status: "conditional", route: "Visitor business meetings plus permitted paid engagement for qualifying professional creative activity", detail: "Rights and publisher meetings fit ordinary business activity. A professional creative may be paid to present, launch or debut their own work, but direct public selling remains outside visitor business permissions.", next: "Separate rights discussions, appearance fee, royalties and retail; use a UK publisher or bookseller for local sales." },
        "ai-teaching": { status: "conditional", route: "Expert lecture, conference route or sponsored work", detail: "An overseas expert may give lectures at a higher-education, research or arts institution through visitor or permitted-paid-engagement rules, but must not fill a teaching post. Corporate delivery and continuing instruction are narrower and may require Service Supplier or Skilled Worker sponsorship.", next: "Have the institution describe the audience, dates, curriculum, fee and whether this is a guest lecture or an ongoing teaching role." },
        "remote-work": { status: "conditional", route: "Incidental overseas remote work only", detail: "A visitor may undertake activities relating to overseas employment remotely, but remote work must not be the primary purpose of the visit and frequent or successive stays must not create a UK remote-work base.", next: "Keep any overseas email or calls incidental, with no UK client delivery, employment or routine nomad base." },
        entrepreneur: { status: "specialist", route: "Visitor reconnaissance followed by Innovator Founder, Global Talent or UK Expansion Worker where eligible", detail: "A visitor may meet partners and investigate opportunities but may not establish and run a UK business as self-employed work. Innovator Founder requires endorsement; Global Talent may fit recognised digital-technology leaders; Expansion Worker requires sponsorship by an overseas business establishing a UK branch.", next: "Use the visit for discovery, then choose the endorsed-founder, talent or overseas-business expansion route before operating locally." },
        trade: { status: "conditional", route: "Visitor negotiation and promotion or sponsored Service Supplier delivery", detail: "Trade meetings, contract negotiation and overseas-business promotion fit visitor rules, without direct selling. Qualifying contractual service delivery may use a sponsored Service Supplier route; the UK–Australia trade-agreement schedule includes computer-related, consulting, research-and-development and telecommunications sectors subject to its occupation and experience tests.", next: "Have the UK customer and immigration adviser test the contract, sector, occupation, experience and Certificate of Sponsorship requirements before any delivery." },
        artist: { status: "conditional", route: "Standard Visitor, permitted paid engagement or Creative Worker concession or visa", detail: "Qualifying unpaid creative activity may use visitor rules, a professional artist may use a paid engagement, and a sponsored Creative Worker who does not normally need a visitor visa may use the concession for up to three months.", next: "Have the promoter classify payment, funding, performance dates and sponsor status; concession users must see a border officer rather than use an ePassport gate." },
        "mixed-mission": { status: "conditional", route: "ETA with a separate legal basis for every programmed activity", detail: "Tourism, meetings and attendance can share the visit, but unpaid talks, paid appearances, teaching, creative work, sales and service delivery retain distinct boundaries.", next: "Build one dated schedule and label each item attendance, non-commercial talk, paid engagement, sponsored delivery or local sale before booking." }
      },
      steps: ["Obtain the ETA and wait for approval before travel.", "List every duty, venue, host, payment and expense in a single dated schedule.", "Use Standard Visitor permission for tourism, attendance, meetings and negotiation only where the published activity fits.", "For a paid expert appearance, secure the organiser's formal invitation and place it inside the first month.", "Use a sponsored route for longer creative, teaching, service or operating work."],
      cautions: ["Is the traveller only attending, or appearing on the program?", "Is an unpaid event genuinely non-commercial and non-profit for the organiser?", "Does the expertise and engagement directly relate to the traveller's Australian profession?", "Does every permitted paid engagement occur during the first month?", "Will a UK customer receive contracted service delivery rather than discussion or negotiation?", "Will the traveller directly sell books, merchandise or services?", "Will a Creative Worker concession traveller avoid the ePassport gates and present the Certificate of Sponsorship to a border officer?"],
      sources: [
        { title: "Check when you can get an Electronic Travel Authorisation", authority: "UK Visas and Immigration", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta", checked: "21 August 2026", supports: "Australian ETA eligibility and visitor window" },
        { title: "Apply for an Electronic Travel Authorisation", authority: "UK Visas and Immigration", url: "https://www.gov.uk/eta/apply", checked: "21 August 2026", supports: "£20 fee, passport linkage, timing and validity" },
        { title: "What you can and cannot do with an ETA", authority: "UK Visas and Immigration", url: "https://www.gov.uk/eta/what-you-can-cannot-do", checked: "21 August 2026", supports: "visitor, permitted-paid-engagement and Creative Worker entry boundaries" },
        { title: "Immigration Rules Appendix V: Visitor", authority: "UK Home Office", url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-v-visitor", checked: "21 August 2026", supports: "visitor entry conditions, prohibited work and paid engagements" },
        { title: "Immigration Rules Appendix Visitor: Permitted Activities", authority: "UK Home Office", url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-visitor-permitted-activities", checked: "21 August 2026", supports: "meetings, talks, trade, remote work, training and creative activity" },
        { title: "Visit the UK for a paid engagement or event", authority: "UK Visas and Immigration", url: "https://www.gov.uk/standard-visitor/paid-engagement-event", checked: "21 August 2026", supports: "speaker, lecturer and creative paid engagements, invitation and first-month limit" },
        { title: "Visiting the UK as a creative professional from a non-visa national country", authority: "UK Home Office", url: "https://www.gov.uk/guidance/visiting-the-uk-as-a-creative-professional-from-a-non-visa-national-country", checked: "21 August 2026", supports: "visitor, paid-engagement and Creative Worker routes" },
        { title: "Innovator Founder visa: Eligibility", authority: "UK Visas and Immigration", url: "https://www.gov.uk/innovator-founder-visa/eligibility", checked: "21 August 2026", supports: "endorsed innovative founder route" },
        { title: "Global Talent visa: Digital technology", authority: "UK Visas and Immigration", url: "https://www.gov.uk/global-talent-digital-technology", checked: "21 August 2026", supports: "digital-technology talent route" },
        { title: "UK Expansion Worker visa", authority: "UK Visas and Immigration", url: "https://www.gov.uk/uk-expansion-worker-visa", checked: "21 August 2026", supports: "overseas-business UK expansion route" },
        { title: "Service Supplier visa: Eligibility", authority: "UK Visas and Immigration", url: "https://www.gov.uk/service-supplier-visa/eligibility", checked: "21 August 2026", supports: "sponsorship, contract and work-experience tests" },
        { title: "Service Supplier visa: eligible trade agreements and sectors", authority: "UK Home Office", url: "https://www.gov.uk/government/publications/service-supplier-visa-eligible-trade-agreements-and-sectors/service-supplier-visa-eligible-trade-agreements-and-sectors-accessible-version", checked: "21 August 2026", supports: "UK–Australia agreement sectors and independent-professional experience requirements" },
        { title: "Skilled Worker visa: Your job", authority: "UK Visas and Immigration", url: "https://www.gov.uk/skilled-worker-visa/your-job", checked: "21 August 2026", supports: "sponsored employment boundary" },
        { title: "Youth Mobility Scheme visa: Eligibility", authority: "UK Visas and Immigration", url: "https://www.gov.uk/youth-mobility/eligibility", checked: "21 August 2026", supports: "Australian age limit of 18 to 35" },
        { title: "London Tech Week", authority: "Event organiser", url: "https://londontechweek.com/", checked: "21 August 2026", supports: "recurring English-language technology and founder conference signal" },
        { title: "The AI Summit London", authority: "Event organiser", url: "https://london.theaisummit.com/", checked: "21 August 2026", supports: "large recurring English-language AI speaker circuit" },
        { title: "Data Centre Transformation", authority: "Data Centre Alliance", url: "https://dctransformation.co.uk/", checked: "21 August 2026", supports: "data-centre and infrastructure conference signal" },
        { title: "The Peak of Data & AI 2027", authority: "Safe Software and event organiser", kind: "opportunity", url: "https://peakofdataandai.com/", checked: "21 August 2026", supports: "open presentation call, 29 September 2026 deadline, event dates and published speaker terms" }
      ]
    },
    {
      id: "ireland",
      name: "Ireland",
      flag: "🇮🇪",
      region: "Europe",
      reviewed: "21 August 2026",
      claimChecks: buildClaimChecks("IRL", "21 August 2026"),
      entrySnapshot: "Visa-exempt Australian passport; landing permission up to three months",
      ageNote: "The published visitor, short-work, Atypical Working Scheme, Start-up Entrepreneur Programme and employment-permit criteria reviewed do not set an upper-age barrier relevant at 43. Ireland's Working Holiday programme is youth-focused and is not counted as an available route.",
      cardSummary: "Easy visa-exempt entry and a strong English conference ecosystem, with a useful single 14-day short-work window but more host work for longer speaking or teaching.",
      summary: "Australians are visa-exempt, but entry remains controlled and the landing permission must match the declared purpose. Meetings and conference attendance are straightforward. The published short-business framework permits one single work period of no more than 14 days; a longer specialised engagement may fit the Atypical Working Scheme, but its contract, salary and Irish-host requirements mean unpaid or solo self-employed delivery must not be assumed eligible.",
      launch: {
        fastestEntry: "Travel visa-exempt and request landing permission for the declared tourism, business or event purpose; the immigration officer may grant up to three months.",
        beforeDeparture: "Carry purpose evidence, funds, insurance, accommodation and host invitations. If any work lasts 15 to 90 days, obtain Atypical Working Scheme approval outside Ireland before travel and allow at least 20 working days.",
        usefulStay: "Landing permission may allow up to three months, but work is separately limited: one single work period of 14 days or less unless prior approval or an employment permit applies.",
        hostUnlock: "An Irish organiser invitation supports the short-business or performance purpose. For the Atypical Working Scheme, the Irish host must be registered and provide the contract, duties, salary in euros and duration.",
        quickPacket: ["Australian passport", "Onward travel and complete itinerary", "Accommodation and sufficient-funds evidence", "Travel or medical insurance", "Invitation stating duties, dates, fee and every covered cost", "Original contract and prior work approval where applicable"]
      },
      conferenceFit: {
        label: "Very high · English-primary",
        detail: "Dublin and other Irish centres offer a strong English-language circuit spanning government AI policy, software reliability, education, technology and data-centre infrastructure. Current recurring signals include the International AI Summit, Dublin Tech Summit and DataCentres Ireland.",
        themes: ["AI and responsible AI", "AI policy", "software reliability", "education", "technology", "data centres", "research", "startups"]
      },
      opportunities: [
        {
          id: "IRL-OPP-PYCON-2026",
          checked: "21 August 2026",
          type: "Call for speakers",
          title: "PyCon Ireland 2026",
          deadline: "30 August 2026, 12:00 am Irish time",
          deadlineISO: "2026-08-30",
          deadlineAt: "2026-08-30T00:00:00+01:00",
          compensation: "Speakers must buy a ticket. Financial aid is available by request, capped at €350; automatic airfare and accommodation coverage are not published.",
          detail: "Dublin event on 21 November 2026 seeking AI engineering, AI ethics and risks, responsible AI, Python, cloud and hardware proposals. Maximum three proposals; entirely or substantially LLM-written proposals are prohibited.",
          url: "https://sessionize.com/pycon-ireland-2026/"
        },
        {
          id: "IRL-OPP-SRECON26-EMEA-LIGHTNING",
          checked: "21 August 2026",
          type: "Call for lightning talks",
          title: "SREcon26 EMEA lightning talks",
          deadline: "2 September 2026, 9:00 pm UTC",
          deadlineISO: "2026-09-02",
          deadlineAt: "2026-09-02T21:00:00Z",
          compensation: "Lightning speakers receive no registration discount and must be registered attendees. Travel and accommodation coverage are not published.",
          detail: "Dublin event on 13–15 October 2026 offering four-minute, 16-slide lightning talks for ideas across site reliability, complex systems, AI infrastructure and resilience; participation is in person.",
          url: "https://www.usenix.org/conference/srecon26emea/call-for-participation"
        },
        {
          id: "IRL-OPP-IICE-APRIL-2027",
          checked: "21 August 2026",
          type: "Call for speakers",
          title: "Ireland International Conference on Education 2027",
          deadline: "28 November 2026",
          deadlineISO: "2026-11-28",
          deadlineAt: "2026-11-28T23:59:59Z",
          compensation: "The speaker-call page does not publish a speaker fee, registration waiver, travel or accommodation coverage; confirm before committing.",
          detail: "Dún Laoghaire event on 30 March–1 April 2027. Its main theme is AI and education, with further openings around consciousness, ethics, arts and social entrepreneurship.",
          url: "https://www.iicedu.org/call-for-speakers/"
        }
      ],
      pathways: {
        tourism: { status: "low", route: "Visa-exempt visitor entry and landing permission", detail: "Australian passport holders are visa-exempt, but the border officer decides admission and may grant up to three months for the declared visitor purpose.", next: "Carry onward travel, accommodation, funds, insurance and a clear itinerary." },
        meetings: { status: "low", route: "Visa-exempt entry for declared business activity", detail: "Meetings, contract signing and business discussions fit the published short-business framework. The short-stay C visa application itself is unnecessary for an Australian, but the activity and documentary boundaries still matter at entry.", next: "Carry an Irish host invitation describing the meetings and confirming that no local work will occur." },
        conference: { status: "low", route: "Visa-exempt entry for conference attendance", detail: "Attendance fits the conference purpose. The published conference permission does not allow paid or unpaid work, so a panel, talk, workshop or facilitation role must be classified separately.", next: "Register as an attendee and ask the organiser to classify any programmed role as short work or performance." },
        "unpaid-speaking": { status: "conditional", route: "Declared short-business activity for one single work period of no more than 14 days", detail: "An unpaid program role is still work; attendance permission alone does not cover speaking. The published short-business framework permits a single work period of 14 days or less, subject to purpose and border evidence.", next: "Have the host document zero fee, every covered expense, dates and duties; for 15 days or more obtain written classification from Immigration Service Delivery." },
        "paid-speaking": { status: "conditional", route: "Short-business or performance activity for no more than 14 days; possible Atypical Working Scheme for 15 to 90 days", detail: "A short paid speaking or performance engagement may fit the single 14-day work window. The Atypical Working Scheme can support specialised longer work, but its registered-host, employment-contract and salary requirements mean self-employed or loosely structured speaking tours are not assumed eligible.", next: "Have one Irish host obtain written classification of the complete tour, contract, euro salary or fee, expenses and duration before booking." },
        "book-launch": { status: "conditional", route: "Business meetings plus separately classified speaking, performance and sales activity", detail: "Publisher and rights meetings are business activity. A reading, launch appearance or signing may be work, while direct retail introduces separate commercial, customs and tax questions.", next: "Use an Irish publisher or bookseller for sales and split rights meetings, appearance duties, royalties and retail in the invitation." },
        "ai-teaching": { status: "specialist", route: "Single short-business work period up to 14 days, Atypical Working Scheme for 15 to 90 days or an eligible visiting-academic arrangement", detail: "A brief workshop or lecture may use the short-work window. Longer specialised teaching may require Atypical approval; an institution-led visiting-academic route can apply to eligible visits under 12 months when the Irish and overseas institutions document the arrangement.", next: "Have the institution identify whether the role is a guest lecture, short training, atypical employment or visiting-academic exchange before advertising it." },
        "remote-work": { status: "not-fit", route: "No dedicated digital-nomad route identified", detail: "The official short-stay catalogue does not publish routine overseas remote work as a visitor purpose, and visitor permission does not generally authorise paid or unpaid work. Irish PAYE rules can also arise for duties exercised in Ireland.", next: "Do not use visitor entry as a routine remote-work base without written immigration and tax advice." },
        entrepreneur: { status: "specialist", route: "Start-up Entrepreneur Programme", detail: "STEP requires good character, at least €50,000 funding for the first founder, an innovative business proposal and a €350 application fee. Successful applicants must work on the business full-time and may not take other employment.", next: "Test the venture against the innovation criteria and secure funding before submitting the proposal for quarterly evaluation." },
        trade: { status: "conditional", route: "Meetings and negotiation, one short work period up to 14 days, Atypical approval or Contract for Services Employment Permit", detail: "Trade discussions are easy. Longer delivery under a foreign undertaking's one-to-one contract with an Irish entity may use a Contract for Services Employment Permit, normally requiring at least six months with the overseas employer and an application at least 12 weeks before the proposed start. Solo self-employed fit is not assumed.", next: "Classify the trip as negotiation, short delivery or contracted service, then have the Irish customer begin the correct host process." },
        artist: { status: "conditional", route: "Short performance activity, Atypical Working Scheme or Sport and Cultural Employment Permit", detail: "A paid or unpaid performance may fit the single 14-day work window. Longer cultural employment can require Atypical approval or an employment permit with an Irish contract and host.", next: "Have the organiser document the performance, rehearsals, fee, expenses and duration and start any permit process at least 12 weeks ahead." },
        "mixed-mission": { status: "confirm", route: "Visa-exempt entry with written classification for each work component", detail: "Tourism, meetings and attendance can coexist, but speaking, teaching, performance, sales and service delivery keep separate activity rules and time limits.", next: "Nominate one Irish lead host and obtain written classification from Immigration Service Delivery or the Department of Enterprise where any work boundary is unclear." }
      },
      steps: ["Travel visa-exempt with the Australian passport and evidence supporting the declared purpose.", "Build one dated schedule of meetings, attendance, talks, teaching, performances, sales and payments.", "Use the published single work period of no more than 14 days only where the host has documented the correct short-business or performance purpose.", "For work lasting 15 to 90 days, test the Atypical Working Scheme and allow at least 20 working days after a complete application.", "For longer contracted services or cultural employment, begin the employment-permit process at least 12 weeks before the proposed start."],
      cautions: ["Is the traveller attending only, or doing paid or unpaid work on the program?", "Is the complete work period one single period of no more than 14 days?", "Does an Atypical application have an Irish registered host, employment contract, euro salary and complete duties?", "Is the traveller genuinely employed by a foreign undertaking, or operating solo as self-employed?", "Who handles Irish book or merchandise sales, customs and tax?", "Does a university engagement qualify as a visiting-academic exchange or ordinary work?"],
      sources: [
        { title: "Immigration Act 2004 (Visas) Order 2024", authority: "Government of Ireland", url: "https://www.irishstatutebook.ie/eli/2024/si/335/made/en/pdf", checked: "21 August 2026", supports: "visa-exempt national list including Australia" },
        { title: "Immigration Act 2004 (Visas) (Amendment) Order 2025", authority: "Government of Ireland", url: "https://www.irishstatutebook.ie/eli/2025/si/68/made/en/html", checked: "21 August 2026", supports: "current amendment context for the visa-exemption order" },
        { title: "At the border", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/at-the-border/entry-for-non-eu-non-eea-non-swiss-and-non-uk-nationals/", checked: "21 August 2026", supports: "border discretion, landing permission, purpose evidence, funds, insurance and accommodation" },
        { title: "Short-stay business visa", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-less-than-90-days/short-stay-business-visa/", checked: "21 August 2026", supports: "business activities and single work period of 14 days or less" },
        { title: "Conference or event visa", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-less-than-90-days/conference-event-visa/", checked: "21 August 2026", supports: "conference attendance purpose and no-work boundary" },
        { title: "Atypical Working Scheme", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/applying-for-a-long-stay-employment-visa/atypical-working-scheme/", checked: "21 August 2026", supports: "15-to-90-day specialised work, host, contract, salary and processing requirements" },
        { title: "Performance or tournament visa", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-less-than-90-days/performance-tournament-visa/", checked: "21 August 2026", supports: "short paid or unpaid performance purpose and work limit" },
        { title: "Start-up Entrepreneur Programme", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/start-up-entrepreneur-programme-step/", checked: "21 August 2026", supports: "€50,000 funding, innovation, €350 fee and full-time founder conditions" },
        { title: "Visiting academic", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/visiting-academic/", checked: "21 August 2026", supports: "institution-led visiting-academic route under 12 months" },
        { title: "Employment permits", authority: "Department of Enterprise, Tourism and Employment", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/", checked: "21 August 2026", supports: "employment-permit system and employer-sponsored work boundary" },
        { title: "Employment permit application forms", authority: "Department of Enterprise, Tourism and Employment", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/application-forms/", checked: "21 August 2026", supports: "application timing of at least 12 weeks before proposed employment" },
        { title: "Contract for Services Employment Permit", authority: "Department of Enterprise, Tourism and Employment", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/contract-for-services-employment-permit/", checked: "21 August 2026", supports: "foreign undertaking, Irish contract and overseas-employment requirements" },
        { title: "Sport and Cultural Employment Permit", authority: "Department of Enterprise, Tourism and Employment", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/sport-and-cultural-employment-permit/", checked: "21 August 2026", supports: "longer cultural employment route" },
        { title: "Foreign employments exercised in the State", authority: "Revenue", url: "https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-42/42-04-35a-20250214122127.pdf", checked: "21 August 2026", supports: "PAYE boundary for duties exercised in Ireland" },
        { title: "Working holidays in Ireland", authority: "Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/working-holidays-in-ireland/", checked: "21 August 2026", supports: "youth-focused Working Holiday route excluded at age 43" },
        { title: "International AI Summit 2026", authority: "Department of Enterprise, Tourism and Employment", url: "https://enterprise.gov.ie/en/news-and-events/department-events/ai-summit-2026.html", checked: "21 August 2026", supports: "government-backed English-language AI conference signal" },
        { title: "Dublin Tech Summit", authority: "Event organiser", url: "https://dublintechsummit.tech/", checked: "21 August 2026", supports: "recurring English-language technology and startup conference signal" },
        { title: "DataCentres Ireland", authority: "Event organiser", url: "https://www.datacentres-ireland.com/", checked: "21 August 2026", supports: "recurring data-centre and infrastructure conference signal" },
        { title: "PyCon Ireland 2026 call for speakers", authority: "PyCon Ireland", kind: "opportunity", url: "https://sessionize.com/pycon-ireland-2026/", checked: "21 August 2026", supports: "open call, 30 August 2026 deadline, event themes and published speaker terms" },
        { title: "SREcon26 EMEA call for participation", authority: "USENIX", kind: "opportunity", url: "https://www.usenix.org/conference/srecon26emea/call-for-participation", checked: "21 August 2026", supports: "open lightning-talk call, 2 September 2026 deadline, format and published speaker terms" },
        { title: "Ireland International Conference on Education 2027 call for speakers", authority: "IICE", kind: "opportunity", url: "https://www.iicedu.org/call-for-speakers/", checked: "21 August 2026", supports: "open speaker call, 28 November 2026 deadline, event dates and themes" }
      ]
    },
    {
      id: "new-zealand",
      name: "New Zealand",
      flag: "🇳🇿",
      region: "Oceania",
      reviewed: "21 August 2026",
      claimChecks: buildClaimChecks("NZL", "21 August 2026"),
      entrySnapshot: "Resident visa at border; unrestricted work rights",
      ageNote: "Age 43 creates no immigration threshold. The Australian Resident Visa is based on Australian citizenship, not age.",
      cardSummary: "The easiest active-work destination: residence is normally granted at the border and includes work in any occupation for any employer.",
      summary: "An Australian citizen travelling on an Australian passport normally receives an Australian Resident Visa at the New Zealand border, without a pre-travel visa or NZeTA. It permits indefinite residence and work in any occupation for any employer, so tourism, conferences, speaking, teaching, creative work and remote work do not need separate immigration sponsorship. The practical work is instead accurate tax classification, professional registration where applicable, contracts, event permissions, company structure and customs. The resident visa expires when the traveller leaves, but a qualifying Australian citizen can normally receive a new one on the next arrival; a Variation of Travel Conditions matters if preserving continuous residence toward permanent residence.",
      launch: {
        fastestEntry: "Australian Resident Visa granted at the New Zealand border, subject to identity and character requirements",
        beforeDeparture: "Travel on the Australian passport. Complete the free New Zealand Traveller Declaration from 24 hours before the journey begins. If character eligibility is uncertain, resolve it with Immigration New Zealand before flying.",
        usefulStay: "The resident visa permits an indefinite stay. It expires on departure unless travel conditions have been varied; this usually does not prevent a qualifying Australian citizen receiving a fresh resident visa on a later arrival.",
        hostUnlock: "No immigration sponsor is required. A host adds value by documenting the invitation, role, dates, venue, fee or expenses, tax classification and any professional or event permissions.",
        quickPacket: ["Valid Australian passport", "Submitted New Zealand Traveller Declaration", "Invitation and schedule", "Fee, expense and tax terms", "Speaker, teaching, book or performance materials"]
      },
      conferenceFit: {
        label: "Excellent · English-first",
        detail: "Auckland, Wellington, Christchurch and Dunedin support recurring English-language AI, data, research, technology and civic conferences. Current organiser signals include the Artificial Intelligence Researchers Association annual conference, CDAIO New Zealand and NZ Tech Rally, whose 2027 public speaker call includes AI, Data & Ethics.",
        themes: ["AI", "data", "ethics", "technology", "research", "public policy", "community", "infrastructure"]
      },
      opportunities: [
        {
          id: "NZL-OPP-NZ-TECH-RALLY-2027",
          checked: "21 August 2026",
          type: "Call for speakers",
          title: "NZ Tech Rally 2027",
          deadline: "31 August 2026",
          deadlineISO: "2026-08-31",
          deadlineAt: "2026-08-31T23:59:59+12:00",
          compensation: "NZD 500 excluding GST for each selected in-person talk.",
          detail: "Wellington event on 7 May 2027 seeking 23 speakers across five tracks, including AI, Data & Ethics and Community, Culture & Wellbeing; the organiser says selection begins with blind review.",
          url: "https://nztechrally.nz/call-for-speakers"
        }
      ],
      pathways: {
        tourism: { status: "low", route: "Australian Resident Visa at the border", detail: "No pre-travel visa or NZeTA is required for an Australian citizen using an Australian passport. The New Zealand Traveller Declaration is still mandatory.", next: "Complete the declaration from 24 hours before travel and carry the Australian passport." },
        meetings: { status: "low", route: "Australian Resident Visa; no activity restriction", detail: "Partner, publisher, university, supplier, investor and government meetings are permitted, including activity that would otherwise be classed as work.", next: "Carry the invitation and keep a written record of any offer that changes into paid delivery." },
        conference: { status: "low", route: "Australian Resident Visa", detail: "Attendance, networking, exhibiting and active participation do not need a separate immigration route. Customs and organiser conditions still apply to equipment or merchandise.", next: "Register with the organiser and separate attendance from any paid talk, sales or imported stock for tax and customs planning." },
        "unpaid-speaking": { status: "low", route: "Australian Resident Visa", detail: "Unpaid keynotes, panels, readings and community talks are permitted without host sponsorship. Reimbursed travel, accommodation or an honorarium should still be documented and checked for tax treatment.", next: "Use a short invitation stating no fee and listing every expense or non-cash benefit." },
        "paid-speaking": { status: "conditional", route: "Australian Resident Visa plus New Zealand tax treatment", detail: "Immigration permits the work. Inland Revenue commonly treats non-resident lecturers and speakers as non-resident entertainers, for whom the payer is likely to deduct 20% withholding tax. A private workshop or consulting engagement may instead fall under non-resident contractor rules, whose default withholding rate is currently 15% unless an exemption or tailored rate applies.", next: "Have the New Zealand payer confirm entertainer versus contractor classification, withholding, GST and any Australia–New Zealand treaty effect before signing." },
        "book-launch": { status: "conditional", route: "Australian Resident Visa; split promotion, royalties, imports and retail", detail: "Talks, readings, signings and rights meetings are permitted. Local book sales, imported stock, royalties and GST are separate commercial questions.", next: "Let a New Zealand publisher or bookseller handle local stock and receipts where practical, and list the talk, rights negotiation and sales separately." },
        "ai-teaching": { status: "conditional", route: "Australian Resident Visa; professional registration only where the role requires it", detail: "Guest lectures, university sessions, company training and community workshops are permitted. Formal teaching in New Zealand schools requires Teaching Council registration and a current practising certificate; that is separate from immigration.", next: "Have the host describe whether this is a guest session, professional workshop, university appointment or regulated school-teaching role." },
        "remote-work": { status: "low", route: "Australian Resident Visa with unrestricted work rights", detail: "The resident visa permits work for overseas or New Zealand employers and clients. This is broader than New Zealand's visitor digital-nomad conditions, which only permit overseas work and exclude New Zealand clients, employers and work requiring physical presence.", next: "Use the resident status, not the visitor digital-nomad rule, and check tax residence, permanent establishment and GST if New Zealand becomes a sustained base." },
        entrepreneur: { status: "conditional", route: "Australian Resident Visa plus normal business registration", detail: "No entrepreneur visa is required to start or operate a business. Incorporation, directors, tax registration, licences and investment rules remain separate. An Australian company carrying on business in New Zealand may need registration on the Overseas Register within 10 working days of starting those activities.", next: "Choose between an Australian-company branch, New Zealand subsidiary, New Zealand company or individual structure with accounting and legal advice." },
        trade: { status: "conditional", route: "Australian Resident Visa plus company, tax and customs compliance", detail: "The traveller may negotiate, sell, exhibit, install and deliver services under the resident work right. Carrying on business, importing stock and collecting New Zealand revenue can trigger registration, GST and customs duties.", next: "Use a New Zealand importer, distributor or publisher for the first tour where practical, then formalise the operating structure if activity becomes recurring." },
        artist: { status: "conditional", route: "Australian Resident Visa plus venue, event and tax requirements", detail: "Music, film, literary and arts performances are permitted without a work visa. Venue permissions, public-event requirements, copyright and tax still apply. Inland Revenue includes actors, musicians, singers, dancers, lecturers and speakers in its non-resident entertainer guidance.", next: "Have the promoter confirm venue permissions and the likely 20% non-resident entertainer withholding before announcing a paid performance." },
        "mixed-mission": { status: "low", route: "Australian Resident Visa as the immigration foundation", detail: "Meetings, speaking, teaching, remote work, consulting and cultural activity can share one trip without separate immigration permissions. Each payment, seller, imported item, regulated role and venue still needs its own ordinary compliance check.", next: "Build one schedule that marks attendance, public delivery, private consulting, local sales, remote work and regulated teaching separately." }
      },
      steps: ["Travel using the Australian passport and complete the New Zealand Traveller Declaration from 24 hours before the journey.", "Receive the Australian Resident Visa at the border, subject to character and entry checks.", "Use one written invitation that states activities, locations, fees, expenses and host contacts.", "Before paid public delivery, have the payer classify the engagement for non-resident entertainer or contractor withholding.", "Add professional registration, business, customs and venue checks only where the actual activity triggers them.", "If preserving continuous residence toward permanent residence, investigate a Variation of Travel Conditions before departing New Zealand."],
      cautions: ["Does the traveller have any character issue that should be resolved before travel rather than at the border?", "Is the paid engagement a public speaker or entertainer appearance, or private contractor consulting and training?", "Will travel, accommodation, honoraria or payments made outside New Zealand still form part of taxable New Zealand income?", "Does formal school teaching require Teaching Council registration and a practising certificate?", "Is an Australian company merely visiting, or has it started carrying on business in New Zealand?", "Is preserving continuous New Zealand residence important enough to obtain travel conditions before departure?"],
      sources: [
        { title: "Australian Resident Visa", authority: "Immigration New Zealand", url: "https://www.immigration.govt.nz/visas/australian-resident-visa/", checked: "21 August 2026", supports: "border grant, indefinite stay, unrestricted work, NZeTA distinction and expiry on departure" },
        { title: "Australian citizens and permanent residents travelling to New Zealand", authority: "Immigration New Zealand", url: "https://www.immigration.govt.nz/visit/what-you-need-to-visit-new-zealand/australian-citizens-and-permanent-residents-travelling-to-new-zealand/", checked: "21 August 2026", supports: "Australian-citizen arrival procedure and continuous-residence travel warning" },
        { title: "New Zealand Traveller Declaration", authority: "New Zealand Customs Service", url: "https://www.travellerdeclaration.govt.nz/", checked: "21 August 2026", supports: "mandatory free declaration and 24-hour submission window" },
        { title: "Working remotely from New Zealand", authority: "Immigration New Zealand", url: "https://www.immigration.govt.nz/about-us/news-centre/working-remotely-from-new-zealand/", checked: "21 August 2026", supports: "visitor remote-work conditions used only to distinguish visitor status from Australian residence" },
        { title: "Non-resident entertainers and sportspeople", authority: "Inland Revenue New Zealand", url: "https://www.ird.govt.nz/roles/non-residents/payments-and-exemptions-for-non-resident-entertainers-and-sportspeople", checked: "21 August 2026", supports: "speaker and artist classification, likely 20% withholding and GST boundary" },
        { title: "Non-resident contractors", authority: "Inland Revenue New Zealand", url: "https://www.ird.govt.nz/roles/non-residents/non-resident-contractors-exempt-from-tax", checked: "21 August 2026", supports: "contractor withholding, exemptions and GST boundary" },
        { title: "How overseas companies set up as a New Zealand business", authority: "New Zealand Companies Office", url: "https://companies-register.companiesoffice.govt.nz/help-centre/managing-an-overseas-company-in-nz/how-overseas-companies-set-up-as-a-nz-business/", checked: "21 August 2026", supports: "Australian-company registration and 10-working-day requirement" },
        { title: "Register to teach as an overseas teacher", authority: "Teaching Council of Aotearoa New Zealand", url: "https://teachingcouncil.nz/content.our-code-our-standards/become-a-teacher/overseas-trained-teacher-coming-to-Aotearoa/register-to-teach-as-an-overseas-teacher", checked: "21 August 2026", supports: "formal school-teaching registration and practising-certificate boundary" },
        { title: "Artificial Intelligence Researchers Association Annual Conference", authority: "Conference organiser", url: "https://www.ainz.ai/", checked: "21 August 2026", supports: "recurring AI research conference and forthcoming abstract call opportunity" },
        { title: "NZ Tech Rally 2027 call for speakers", authority: "NZ Tech Rally", kind: "opportunity", url: "https://nztechrally.nz/call-for-speakers", checked: "21 August 2026", supports: "open call opportunity, tracks, formats, selection process and NZD 500 speaker fee" },
        { title: "CDAIO New Zealand 2026", authority: "Corinium Global Intelligence", url: "https://cdaio-nz.coriniumintelligence.com/", checked: "21 August 2026", supports: "recurring English-language data, AI, governance and sovereignty conference opportunity" }
      ]
    },
    {
      id: "singapore",
      name: "Singapore",
      flag: "🇸🇬",
      region: "South-East Asia",
      reviewed: "21 August 2026",
      claimChecks: buildClaimChecks("SGP", "21 August 2026"),
      entrySnapshot: "Visa-free entry; activity permission is separate",
      ageNote: "Age 43 does not block visa-free entry, Work Pass Exempt activity or EntrePass. It materially raises the Employment Pass salary floor: currently S$10,236 a month outside financial services and S$11,291 in financial services; for applications from 1 January 2027 these become S$11,000 and S$12,145, before COMPASS assessment.",
      cardSummary: "A world-class English conference hub with easy attendance and a powerful short-speaker notification route, but no general remote-worker permission.",
      summary: "Australian passport holders do not require an entry visa for business or social visits, but the electronic Short-Term Visit Pass granted at the checkpoint controls the authorised stay and does not itself permit employment, business or professional activity. Meetings, conference participation and trade visits need no MOM notification when they do not involve a Singapore service contract. Eligible speakers, moderators, facilitators, trainers, exhibitors and performers can use the Work Pass Exempt framework: they must be engaged before entry, hold a valid Short-Term Visit Pass, notify MOM after arrival and before starting, and remain within 90 total Work Pass Exempt days per calendar year. Events related to religion, race, community, a cause or a political end fall outside the normal seminar exemption and can require a Singapore-sponsored Miscellaneous Work Pass.",
      launch: {
        fastestEntry: "Visa-free travel for Australian passport holders; the stay granted appears on the electronic Short-Term Visit Pass after entry",
        beforeDeparture: "Use a passport valid for at least six months, submit the free SG Arrival Card within three days including the arrival day, carry onward travel and funds, and have the organiser classify every active role before departure.",
        usefulStay: "Do not promise a fixed duration: ICA decides the authorised stay at entry and records it on the e-Pass. Work Pass Exempt delivery must fit inside that stay and the 90-day annual ceiling.",
        hostUnlock: "For a normal technical or commercial conference, the organiser supplies the confirmed engagement, dates, workplace address and activity category so the traveller can notify MOM after entry. For cause-related, political, religion, race or community content, a Singapore organisation may need to sponsor a Miscellaneous Work Pass at least two months ahead.",
        quickPacket: ["Australian passport valid at least six months", "Submitted SG Arrival Card", "Electronic Short-Term Visit Pass after arrival", "Confirmed invitation obtained before entry", "MOM activity classification and workplace address", "Fee, benefits and withholding-tax terms"]
      },
      conferenceFit: {
        label: "Exceptional · global English",
        detail: "Singapore has one of Asia's densest English-first international circuits for AI, data, finance, policy, startups and infrastructure. Current recurring anchors include Asia Tech x Singapore, SuperAI, Singapore FinTech Festival and SWITCH. Several offer visible speaker or partnership pathways, while the invitation-only ATxSummit requires relationship building rather than an open submission.",
        themes: ["AI", "AI safety", "data centres", "fintech", "technology policy", "startups", "deep tech", "trade", "digital infrastructure"]
      },
      pathways: {
        tourism: { status: "low", route: "Visa-free entry and Short-Term Visit Pass", detail: "Australian passport holders do not need an entry visa. ICA decides entry and the period of stay. The SG Arrival Card is mandatory but is not a visa.", next: "Submit the arrival card within three days including arrival day, then retrieve and check the electronic Visit Pass." },
        meetings: { status: "low", route: "Short-Term Visit Pass; no MOM notification for attendance-only meetings", detail: "Company meetings, corporate retreats and meetings with business partners do not require MOM notification when they do not involve a contract of service or contract for service with a Singapore employer.", next: "Carry the invitation and do not drift from discussion into local service delivery without reclassification." },
        conference: { status: "low", route: "Short-Term Visit Pass for participant attendance", detail: "Attending training, workshops, seminars and conferences as a participant needs no MOM notification when there is no Singapore service contract. Speaking or training is a different activity.", next: "If the organiser adds a panel, workshop or facilitation role, obtain the confirmed engagement before entry and use the Work Pass Exempt notification route." },
        "unpaid-speaking": { status: "conditional", route: "Work Pass Exempt seminar or conference activity, with post-arrival pre-work notification", detail: "Payment is not the deciding boundary. A speaker, moderator, facilitator or trainer at an eligible event must be engaged before entry and notify MOM after obtaining the Short-Term Visit Pass but before starting. The event cannot primarily promote sales and cannot relate to religion, race, community, a cause or a political end.", next: "Have the organiser classify the subject and event purpose before travel; after entry, submit the MOM e-notification and keep the acknowledgement." },
        "paid-speaking": { status: "conditional", route: "Work Pass Exempt activity for an eligible short engagement; Employment Pass or another pass outside the exemption", detail: "An eligible paid conference talk or workshop can use Work Pass Exempt notification. IRAS generally applies 15% withholding to the gross income of a non-resident professional; speaker fees, honoraria, travel, accommodation, allowances, meals and transport can all be included.", next: "Put the fee and every non-cash benefit into the contract, have the Singapore payer confirm withholding, and notify MOM only after entry but before delivery." },
        "book-launch": { status: "specialist", route: "Rights meetings under the visitor lane; active launch classified separately", detail: "Publisher and rights meetings can remain attendance-only. A sales-led or promotional book launch may fail the seminar exemption because it excludes events whose main purpose is selling or promoting goods or services. A registered exhibitor at an eligible exhibition can display or sell the exhibition's subject matter during official hours.", next: "Split rights meetings, author talk, book promotion, imported stock and retail. Have a Singapore publisher or bookseller handle sales and ask MOM to classify the appearance before announcing it." },
        "ai-teaching": { status: "conditional", route: "Work Pass Exempt notification for a short workshop, seminar or conference; Employment Pass for continuing faculty work", detail: "Short trainers and workshop facilitators can use the exemption when the event fits the eligible scope. It does not cover exam administration, invigilation, marking or setting papers, and it is not for a continuing faculty position. Cause-related or political training can require a Miscellaneous Work Pass.", next: "Have the university or organiser state whether the session is a short workshop, public talk, formal course or continuing appointment and choose Work Pass Exempt activity, Miscellaneous Work Pass or Employment Pass accordingly." },
        "remote-work": { status: "not-fit", route: "No dedicated digital-nomad route identified", detail: "ICA states that Short-Term Visit Pass holders must not engage in paid or unpaid employment, business, profession or occupation unless holding a valid work pass or carrying out a listed Work Pass Exempt activity. The published exemptions do not create a general overseas-remote-work category.", next: "Do not treat visa-free entry as remote-work permission. Obtain written ICA or MOM advice, or use an appropriate long-term work pass before basing ongoing work in Singapore." },
        entrepreneur: { status: "specialist", route: "EntrePass for an eligible innovative or venture-backed company; ONE Pass for qualifying top talent", detail: "EntrePass is open to all nationalities for a private limited company that is venture-backed or owns innovative technology; the holder normally needs at least 30% ownership if already registered. There is no stipulated minimum salary, most applications take about six weeks, and a new pass is up to one year. Existing ONE Pass holders can start, operate and work for multiple companies. A new ONE Pass AI and Tech track is announced for January 2027, replacing Tech.Pass, but final detailed eligibility was not yet published on 21 August 2026.", next: "Use the first trip for meetings only. For operation, test the venture against EntrePass criteria or build an evidence pack for ONE Pass; do not rely yet on the announced 2027 AI and Tech track." },
        trade: { status: "conditional", route: "Attendance lane for meetings and trade visits; Work Pass Exempt notification for active exhibiting", detail: "A trade visitor can attend an exhibition without MOM notification. A registered exhibitor may display, demonstrate or sell the subject goods or services during official opening hours under the exemption, but booth construction, repair and dismantling are excluded. Imports, samples, GST and temporary admission remain customs matters.", next: "Have the organiser register the exhibitor role, notify MOM after arrival, and use a Singapore declaring agent or ATA Carnet where the equipment or stock qualifies." },
        artist: { status: "specialist", route: "Work Pass Exempt activity for qualifying short performances; regular work pass or service-provider route otherwise", detail: "The exemption can cover actors, singers, dancers, musicians and key support staff at government-supported events or qualifying public performance venues. Category 1 bars, clubs, hotels and restaurant venues are excluded unless government-supported. Singapore stopped accepting new Work Permit applications under the Performing Artiste scheme from 1 June 2026. Venue licensing and 15% non-resident public-entertainer withholding are separate.", next: "Have the promoter confirm the venue category, government support, exemption eligibility, public-entertainment licence and tax withholding before contracting." },
        "mixed-mission": { status: "conditional", route: "Short-Term Visit Pass plus exact Work Pass Exempt notifications, Miscellaneous Work Pass or long-term pass for each active component", detail: "Singapore works well when the schedule is atomised: meetings and attendance need no notice; ordinary conference delivery can use the exemption; cause-related or political events can need a Miscellaneous Work Pass; local continuing work needs a work pass; remote work has no published visitor route.", next: "Create one line per activity, venue, subject, payer and host. Do not assume one exemption acknowledgement covers an unlisted extra workshop, sales activity or performance." }
      },
      steps: ["Obtain the confirmed speaking, training, exhibiting or performance engagement before entering Singapore.", "Submit SG Arrival Card within three days including the arrival date and travel on a passport valid for at least six months.", "After entry, retrieve the electronic Short-Term Visit Pass and confirm its last authorised day.", "For an eligible Work Pass Exempt activity, submit MOM e-notification after entry and before starting; keep the acknowledgement.", "If content is cause-related, political, religious, race-related or community-related, have a Singapore sponsor test the Miscellaneous Work Pass route at least two months ahead.", "Have the Singapore payer resolve professional or public-entertainer withholding before finalising the fee.", "Use a separate long-term route for continuing teaching, local employment, company operation or any activity outside the exemption."],
      cautions: ["Was the traveller engaged for the Work Pass Exempt activity before entering Singapore?", "Is this attendance, or active speaking, facilitation, training, exhibiting or performance?", "Is selling or promoting goods or services the event's main purpose?", "Could civic AI, alignment, data-centre policy or advocacy content be considered cause-related or directed towards a political end, requiring a Miscellaneous Work Pass rather than the ordinary exemption?", "Has MOM been notified only after arrival but before the first active session?", "Will fees, honoraria, flights, hotels, meals or other benefits enter the 15% gross withholding base?", "Does the venue qualify for performance exemption and hold any required public-entertainment licence?", "Is a future January 2027 ONE Pass AI and Tech announcement being mistaken for a route already available today?"],
      sources: [
        { title: "Visa information for Australian passport holders", authority: "High Commission of Singapore in Canberra", url: "https://canberra.mfa.gov.sg/consular-services/visa-information/", checked: "21 August 2026", supports: "Australian visa-free entry, border grant and Visit Pass activity warning" },
        { title: "Entering Singapore", authority: "Immigration and Checkpoints Authority", url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore", checked: "21 August 2026", supports: "passport validity, SG Arrival Card, onward travel, electronic pass and Short-Term Visit Pass restrictions" },
        { title: "Eligible activities for a Work Pass Exemption", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/work-pass-exempt-activities/eligible-activities", checked: "21 August 2026", supports: "meetings, attendance, speaking, training, exhibitions, performance boundaries and 90-day annual limit" },
        { title: "Notify MOM for Work Pass Exempt Activities", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/work-pass-exempt-activities/notify-mom-for-an-exemption", checked: "21 August 2026", supports: "post-arrival and pre-work notification timing and required details" },
        { title: "Eligibility for Miscellaneous Work Pass", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/miscellaneous-work-pass/eligibility", checked: "21 August 2026", supports: "cause, political, religion, race and community event route and 60-day duration" },
        { title: "Apply for a Miscellaneous Work Pass", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/miscellaneous-work-pass/apply-for-a-pass", checked: "21 August 2026", supports: "Singapore sponsor, two-month lead recommendation and six-week processing" },
        { title: "Eligibility for Employment Pass", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility", checked: "21 August 2026", supports: "age-43 salary floors, 2027 increases and COMPASS" },
        { title: "Eligibility for EntrePass", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility", checked: "21 August 2026", supports: "venture-backed or innovative-company and ownership criteria" },
        { title: "Apply for an EntrePass", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/entrepass/apply-for-a-pass", checked: "21 August 2026", supports: "six-week processing, separate business registration and visitor-extension warning" },
        { title: "Key facts on Overseas Networks and Expertise Pass", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/key-facts", checked: "21 August 2026", supports: "five-year top-talent route and ability to operate multiple companies" },
        { title: "Foreign workforce policy announcements at COS 2026", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/-/media/mom/documents/press-releases/2026/factsheet-on-foreign-workforce-policies-03032026.pdf", checked: "21 August 2026", supports: "announced January 2027 ONE Pass AI and Tech track and pending-detail boundary" },
        { title: "Treatment of income for non-resident professionals", authority: "Inland Revenue Authority of Singapore", url: "https://www.iras.gov.sg/taxes/withholding-tax/payments-to-non-resident-professional-%28consultant-trainer-coach-etc-%29/treatment-of-income-for-non-resident-professional", checked: "21 August 2026", supports: "15% gross withholding and inclusion of fees, honoraria, accommodation, airfare and benefits" },
        { title: "Tax obligations of non-resident public entertainers", authority: "Inland Revenue Authority of Singapore", url: "https://www.iras.gov.sg/taxes/withholding-tax/payments-to-non-resident-public-entertainer-%28artiste-musician-sportsman-etc-%29/tax-obligations-of-non-resident-public-entertainer", checked: "21 August 2026", supports: "15% performance-income withholding and local payer obligations" },
        { title: "Performing Artiste Work Permit scheme", authority: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg/passes-and-permits/work-permit-for-performing-artiste/eligibility-and-requirements", checked: "21 August 2026", supports: "scheme closure and remaining exemption or regular-pass alternatives" },
        { title: "Public Entertainment Licence", authority: "Singapore Police Force", url: "https://www.police.gov.sg/Business-E-Services/Apply-for-Public-Entertainment-Licence", checked: "21 August 2026", supports: "venue and event licensing layer" },
        { title: "ATA Carnet", authority: "Singapore Customs", url: "https://www.customs.gov.sg/permits-and-licences/import-export-facilitation-schemes/temporary-import-export/ata-carnet/", checked: "21 August 2026", supports: "temporary import of exhibition and professional goods" },
        { title: "Asia Tech x Singapore", authority: "IMDA and Informa", url: "https://asiatechxsg.com/", checked: "21 August 2026", supports: "recurring global AI, infrastructure, policy and enterprise conference opportunity" },
        { title: "Singapore FinTech Festival 2026 agenda", authority: "Singapore FinTech Festival", url: "https://www.fintechfestival.sg/agenda", checked: "21 August 2026", supports: "2026 English programme and current Apply to Speak opportunity signal" },
        { title: "Singapore Week of Innovation and Technology", authority: "SWITCH", url: "https://www.switchsg.org/", checked: "21 August 2026", supports: "recurring deep-tech, AI, startup, innovation and trade conference opportunity" },
        { title: "SuperAI", authority: "SuperAI", url: "https://www.superai.com/", checked: "21 August 2026", supports: "large international AI event and current 2027 speaker application opportunity signal" }
      ]
    },
    {
      id: "united-states",
      name: "United States",
      flag: "🇺🇸",
      region: "North America",
      reviewed: "21 August 2026",
      claimChecks: buildClaimChecks("USA", "21 August 2026"),
      entrySnapshot: "ESTA for permitted tourism or B-1 activity, up to 90 days",
      ageNote: "At age 43, no age ceiling was found in the reviewed ESTA, B-1, E-1, E-2, E-3, O, P or International Entrepreneur Rule criteria. Each specialist route still requires its own evidence.",
      cardSummary: "An enormous English conference market and fast ESTA front door, but paid delivery, performance and routine remote work need careful route separation.",
      summary: "Australians can use an approved ESTA to request Visa Waiver Program admission for up to 90 days for tourism or the same permitted activity set contemplated for B-1 visitors. That makes meetings, negotiations and conference attendance straightforward. It does not turn employment or productive delivery into visitor activity. Speaking has a narrow no-US-salary lane, plus a tightly defined academic honorarium exception; performers and broader paid presenters normally need an O, P, E or other appropriate work route arranged by a US host, employer or agent.",
      launch: {
        fastestEntry: "Approved ESTA under the Visa Waiver Program for tourism or permitted B-1 business activity, with a maximum stay of 90 days",
        beforeDeparture: "Check ESTA eligibility before making reservations and apply at least 72 hours before travel. If prior travel has ended Visa Waiver Program eligibility, allow time for a B or other visa interview.",
        usefulStay: "Up to 90 days under the Visa Waiver Program, with no routine extension or change of status; a short trip to Canada or Mexico generally does not reset the original 90 days.",
        hostUnlock: "A qualifying academic host can document the narrow honorarium rule. Other paid speaking, teaching, performance or employment usually needs a US employer or agent to choose and, where required, petition for the correct route.",
        quickPacket: ["Australian e-passport and approved ESTA or correct visa", "Invitation and complete event itinerary", "Written fee, honorarium and expense terms", "Host route letter and any petition approval or receipt"]
      },
      conferenceFit: {
        label: "Exceptional · English-native",
        detail: "The United States has a vast English-language circuit across AI, policy, research, enterprise technology, data centres, books, startups and creative industries. Ai4's 2026 program showed more than 1,000 speakers and dedicated AI policy, safety, alignment, social-impact and compute tracks; SXSW provides a recurring cross-sector speaking pipeline. These are conference-fit signals, not immigration permission.",
        themes: ["AI", "AI policy", "AI alignment", "technology", "data centres", "research", "startups", "business", "books", "creative industries"]
      },
      opportunities: [
        {
          id: "USA-OPP-CES-2027",
          checked: "21 August 2026",
          type: "Call for speakers",
          title: "CES 2027",
          deadline: "9 September 2026, 11:59 pm PT",
          deadlineISO: "2026-09-09",
          deadlineAt: "2026-09-09T23:59:00-07:00",
          compensation: "Speaking fee, travel and registration coverage are not published on the call page.",
          detail: "Las Vegas event on 6–9 January 2027 seeking cross-industry future-innovation and technology proposals. Selection does not settle the US speaking route.",
          url: "https://platforms.ces.tech/forms/cfs_2027"
        },
        {
          id: "USA-OPP-KEYFACTOR-TECH-DAYS-2027",
          checked: "21 August 2026",
          type: "Call for speakers",
          title: "Keyfactor Tech Days 2027",
          deadline: "10 September 2026; closing time not published",
          deadlineISO: "2026-09-10",
          deadlineAt: "2026-09-10T23:59:59-07:00",
          compensation: "Speaking fee, travel and registration coverage are not published.",
          detail: "San Diego event on 23–25 February 2027 seeking work on securing AI and agents, governance, identity, cryptography and post-quantum readiness; presentations will be recorded and distributed.",
          url: "https://www.keyfactor.com/tech-days/speakers/"
        }
      ],
      pathways: {
        tourism: { status: "low", route: "ESTA under the Visa Waiver Program", detail: "Australians may seek tourism admission for up to 90 days with an approved ESTA and eligible e-passport. ESTA permits travel to request admission; it does not guarantee entry.", next: "Check ESTA status before reservations and carry onward plans, accommodation and evidence of a temporary visit." },
        meetings: { status: "low", route: "ESTA/WB or B-1", detail: "Permitted business activities include consulting business associates, negotiating contracts and commercial transactions that do not involve gainful US employment.", next: "Carry the invitation, meeting agenda and evidence that the underlying business, income and continuing work remain outside the United States." },
        conference: { status: "low", route: "ESTA/WB or B-1 for attendance and participation", detail: "Scientific, educational, professional and business conventions, conferences and seminars are within the published visitor-business activity set. Delivering services or performing is a separate question.", next: "Keep an attendance-only trip documented as such; reclassify the trip if the organiser adds a talk, workshop, training session or fee." },
        "unpaid-speaking": { status: "conditional", route: "ESTA/WB or B-1 only when the appearance is genuinely non-employed and carries no US salary", detail: "A US source may reimburse actual reasonable travel and basic living expenses. Waiving a fee does not by itself make recurring teaching, productive services or an entertainment performance permissible visitor activity.", next: "Have the host record the subject, duration, audience, absence of salary, exact expense policy and why the appearance fits B-1 activity rather than employment." },
        "paid-speaking": { status: "specialist", route: "Narrow academic honorarium exception; otherwise an appropriate petition-based or E work route", detail: "The academic exception covers a usual academic activity lasting no more than nine days at one qualifying higher-education, affiliated nonprofit, nonprofit research or government research organisation, for that organisation's benefit, provided payment or expenses have not been accepted from more than five such organisations in the previous six months. Outside every one of those limits, paid delivery should not be placed on ESTA merely because the trip also includes a conference.", next: "Ask the host to document its qualifying institutional status, activity dates, payment source and rolling six-month institution count; otherwise have a US employer or agent assess O-1, E-3 or another proper work route." },
        "book-launch": { status: "confirm", route: "ESTA/WB or B-1 for publisher, rights, press and distribution meetings; classify appearances, payment and retail separately", detail: "No dedicated author book-launch visitor category was found in the reviewed official guidance. A rights or publisher meeting can fit business-visitor activity, while a paid reading, workshop, repeated promotional appearance or direct selling should not be assumed to fit.", next: "Split the launch into rights meetings, media, speech or reading, signing, honorarium, imported stock and retail; have the US publisher or bookseller handle local sales." },
        "ai-teaching": { status: "specialist", route: "Narrow academic honorarium rule, annotated B-1 specialised-trainer route, or a host-selected E-3, O, J, H or other work category", detail: "The specialised-trainer B-1 route is not a general workshop permission. It requires unique knowledge tied to specified foreign-sourced equipment, machinery, processes or a qualifying project, no US remuneration and an annotated B-1 visa. Ordinary guest teaching or productive training needs its own classification.", next: "Have the university, conference or company define whether this is a speech, usual academic activity, proprietary trainer assignment, formal teaching or productive consulting before travel is booked." },
        "remote-work": { status: "not-fit", route: "No general US digital-nomad or visitor remote-work route identified", detail: "Visa Waiver Program guidance lists employment as not permitted, and B-1 excludes skilled or unskilled labour. The reviewed official guidance does not create a Canada-style permission to base routine foreign-client work in the United States.", next: "Do not plan a US remote-work base on ESTA. If ongoing work is essential to the stay, obtain case-specific immigration advice and a route matched to the actual work." },
        entrepreneur: { status: "specialist", route: "Scout under ESTA/B-1; operate through E-2 treaty investor status or International Entrepreneur Rule parole", detail: "A visitor may investigate an investment but should not remain to manage the business. E-2 requires a substantial committed investment in a real operating enterprise that the investor will develop and direct. International Entrepreneur Rule parole is discretionary, not a visa: the current baseline includes a US startup formed within the previous five years, a central active role, at least 10% ownership, and either at least US$311,071 in qualifying US investment or US$124,429 in qualifying US government awards or grants within 18 months, or partial thresholds plus compelling evidence.", next: "Choose between an investment enterprise and a high-growth startup-parole case, then begin the company, evidence and filing work months rather than days before intended operation." },
        trade: { status: "conditional", route: "ESTA/WB or B-1 for orders, negotiations and contracts; E-1 for ongoing substantial Australia-US trade", detail: "B-1 can cover taking orders for goods produced abroad and negotiating contracts without gainful US employment. E-1 requires sizeable, continuing trade in goods, services or technology, with more than 50% of the enterprise's international trade between the United States and treaty country.", next: "Document where the product or service is produced, who invoices, where delivery occurs and whether the traveller only negotiates or also performs local fulfilment." },
        artist: { status: "specialist", route: "O-1 or P-1, P-2 or P-3 for professional performance; only very narrow B-1 exceptions", detail: "US guidance says B status is normally inappropriate for a professional entertainer regardless of the amount or source of compensation, public appearance, charity status or ethnic-society sponsorship. A narrow B-1 cultural exception requires sending-country sponsorship, a nonpaying audience and all expenses paid by that government. P-3 can cover culturally unique performance, teaching or coaching; O covers extraordinary ability or achievement.", next: "Have a US promoter or agent classify the production, performer, support crew, repertoire, cultural basis, dates and compensation and file any required petition early." },
        "mixed-mission": { status: "specialist", route: "Map each activity separately; the most restrictive active-delivery component controls its own route", detail: "An ESTA meeting or conference-attendance lane does not absorb a paid workshop, academic appointment, performance or local operating role on the same trip. Visa Waiver Program entrants normally cannot extend or change status in the United States.", next: "Give one lead US host a schedule listing every meeting, public appearance, teaching block, fee, expense, sale, performance and remote-work period before selecting entry documents." }
      },
      steps: ["Check ESTA and the travel-history exclusions before making reservations.", "Build one dated itinerary separating attendance, speech, teaching, performance, payment, expenses, sales and remote work.", "Have each US host identify its role, institutional status and legal activity lane in writing.", "Start O, P, E or other petition and consular work months ahead and recheck current processing and interview times.", "Carry the invitation, itinerary, payment terms, return plans and any petition or visa evidence at entry."],
      cautions: ["Travel or presence in North Korea, Iran, Iraq, Libya, Somalia, Sudan, Syria or Yemen on or after 1 March 2011, or Cuba on or after 12 January 2021, can remove Visa Waiver Program eligibility subject to limited exceptions; this changes the route to a visa, not necessarily to a travel ban.", "Does every academic honorarium condition fit: qualifying host, usual academic activity, nine-day limit, institutional benefit and rolling six-month count?", "Are payments genuine reimbursement of actual reasonable expenses, an academic honorarium, or salary or a commercial speaker fee?", "Is the appearance a speech or academic activity, or is it entertainment, productive teaching, consulting or employment?", "Immigration activity permission does not settle US tax, withholding, licensing, union or venue requirements."],
      sources: [
        { title: "Visa Waiver Program", authority: "US Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html", checked: "21 August 2026", supports: "Australian eligibility, 90-day limit, permitted activities, prohibited employment and travel-history exclusions" },
        { title: "US Business Visas B-1 and Allowable Uses", authority: "US Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/business/b-1-fact-sheet.html", checked: "21 August 2026", supports: "ESTA activity equivalence, meetings, conferences, commercial transactions, expenses and specialised-trainer boundary" },
        { title: "9 FAM 402.2 Tourists and Business Visitors", authority: "US Department of State Foreign Affairs Manual", url: "https://fam.state.gov/fam/09FAM/09FAM040202.html", checked: "21 August 2026", supports: "B-1 activity boundaries, academic honorarium rule and professional entertainer exclusions" },
        { title: "Visitor activities within foreign-media visa guidance", authority: "US Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/employment/visas-members-foreign-media-press-radio.html", checked: "21 August 2026", supports: "nine-day academic honorarium and five-institution limits" },
        { title: "Temporary Worker Visas", authority: "US Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/employment/temporary-worker-visas.html", checked: "21 August 2026", supports: "O, P and petition-led temporary work categories" },
        { title: "Treaty Trader, Treaty Investor and Australians in Specialty Occupations", authority: "US Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/employment/treaty-trader-investor-visa-e.html", checked: "21 August 2026", supports: "E-1, E-2 and E-3 criteria and host actions" },
        { title: "Form I-941 Instructions", authority: "US Citizenship and Immigration Services", url: "https://www.uscis.gov/sites/default/files/document/forms/i-941instr.pdf", checked: "21 August 2026", supports: "International Entrepreneur Rule ownership, startup-age, investment, grant and alternative-evidence thresholds" },
        { title: "Ai4 2026", authority: "Event organiser", url: "https://ai4.io/", checked: "21 August 2026", supports: "recurring English-language AI conference opportunity signal" },
        { title: "SXSW conference speaking applications", authority: "Event organiser", url: "https://support.sxsw.com/hc/en-us/articles/360014262311-How-do-I-or-my-company-or-group-apply-to-speak-at-the-SXSW-Conference", checked: "21 August 2026", supports: "recurring cross-sector conference opportunity; 2027 PanelPicker closed before this check" },
        { title: "CES 2027 call for speakers", authority: "CES", kind: "opportunity", url: "https://platforms.ces.tech/forms/cfs_2027", checked: "21 August 2026", supports: "open call opportunity and deadline" },
        { title: "2027 SelectUSA Investment Summit call for speakers", authority: "US Department of Commerce event organiser", url: "https://www.selectusasummit.us/Applications/Call-for-Speakers", checked: "21 August 2026", supports: "international trade, data-centre investment and emerging-market speaker opportunity" },
        { title: "Keyfactor Tech Days 2027 call for speakers", authority: "Keyfactor", kind: "opportunity", url: "https://www.keyfactor.com/tech-days/speakers/", checked: "21 August 2026", supports: "AI security, governance and post-quantum speaker opportunity" }
      ]
    },
    {
      id: "canada",
      name: "Canada",
      flag: "🇨🇦",
      region: "North America",
      reviewed: "21 August 2026",
      claimChecks: buildClaimChecks("CAN", "21 August 2026"),
      entrySnapshot: "eTA required when flying; valid passport without eTA for most land or sea arrivals; stays normally up to six months",
      ageNote: "At age 43, no age ceiling was found for the reviewed visitor, business, speaker, digital-nomad, entrepreneur or CPTPP routes. International Experience Canada is limited to ages 18 to 35 for Australians and is not available.",
      cardSummary: "Easy eTA entry, unusually useful speaker and short-work exemptions, a genuine overseas digital-nomad lane and major English technology circuits.",
      summary: "Canada gives Australians a simple entry document and several precise activity keys. An eTA is normally needed by air and supports visits normally lasting up to six months, but it is not work permission. Federal regulation separately exempts qualifying business visitors, guest speakers, short commercial seminars and certain performing artists from work permits. Canada also expressly welcomes overseas digital nomads on visitor status. Longer teaching, local employment, entrepreneurship and trade operations need the short-work exemption, an entrepreneur permit, CPTPP or another matched route.",
      launch: {
        fastestEntry: "CAD $7 eTA for air travel; most approvals arrive within minutes, although supporting-document cases can take several days",
        beforeDeparture: "Get the eTA before booking a flight and have the Canadian host classify the activity and prepare its invitation before travel, even when no work permit is required.",
        usefulStay: "An eTA can remain valid for up to five years or passport expiry and supports repeat short visits, normally up to six months each; the border officer decides the actual admission period.",
        hostUnlock: "A Canadian host can document the guest-speaker or five-day commercial-seminar exemption, a short high-skilled work exemption, or support a CPTPP, entrepreneur or other work-permit route.",
        quickPacket: ["Australian passport linked to the eTA", "Invitation with exact activities and dates", "Written fee and expense terms", "Evidence of the work-permit exemption or permit route", "Host contact available for the border officer"]
      },
      conferenceFit: {
        label: "Exceptional · English-rich",
        detail: "Vancouver, Toronto and Edmonton have recurring large English-language technology and AI circuits, including Web Summit Vancouver, Elevate and Upper Bound. Montréal adds a strong bilingual and international ecosystem. This fit is inferred from organiser programs and markets; it does not classify speaking activity.",
        themes: ["AI", "AI governance", "technology", "data sovereignty", "research", "startups", "business", "quantum", "democratic resilience", "creative industries"]
      },
      opportunities: [
        {
          id: "CAN-OPP-ITECHLAW-WTLC-2027",
          checked: "21 August 2026",
          type: "Call for proposals",
          title: "ITechLaw 2027 World Technology Law Conference",
          deadline: "28 August 2026, 11:59 pm PT",
          deadlineISO: "2026-08-28",
          deadlineAt: "2026-08-28T23:59:00-07:00",
          compensation: "ITechLaw says it does not pay speaking fees; exceptions may apply. Selected speakers receive discounted member registration, while in-house counsel, academic faculty and government officials may attend free. Travel and accommodation coverage are not published.",
          detail: "Vancouver event on 12–14 May 2027 seeking panels, workshops and keynotes on agentic AI, rogue-agent risk, AI governance, human rights, regulation, red teaming, data protection, export controls, sanctions, quantum and startups.",
          url: "https://www.itechlaw.org/2026/07/22/call-for-proposals-vancouver/"
        }
      ],
      pathways: {
        tourism: { status: "low", route: "eTA when travelling by air; valid passport for most land or sea arrivals", detail: "Australian passport holders do not need a visitor visa. Visits are normally allowed for up to six months, but an eTA only permits travel to request entry.", next: "Apply through the official CAD $7 site before booking a flight and verify that the approval contains the correct passport number." },
        meetings: { status: "low", route: "Business visitor under IRPR 186(a) and 187", detail: "The visitor must stay under six months, avoid directly entering the Canadian labour market, and keep the main business, remuneration and profits predominantly outside Canada. Meetings, negotiations and qualifying training are published examples.", next: "Carry the foreign-company support letter, Canadian invitation, relevant contracts, funds and a host contact available within 24 hours." },
        conference: { status: "low", route: "Business visitor for attendance", detail: "Meetings, conferences, conventions and trade fairs are published business-visitor activities. An eTA remains the separate air-entry requirement.", next: "Carry registration and agenda documents; if the role changes from attendee to presenter, classify it under the speaker exemption." },
        "unpaid-speaking": { status: "conditional", route: "IRPR 186(j) guest-speaker exemption", detail: "A guest speaker may work without a permit for the sole purpose of making a speech or delivering a paper at a dinner, graduation, convention or similar function. The regulation does not make the exemption depend on the absence of payment.", next: "Have the organiser state the exact function, speech or paper, date, audience and whether any other teaching, consulting or seminar work is included." },
        "paid-speaking": { status: "conditional", route: "IRPR 186(j) guest-speaker exemption or commercial speaker/seminar exemption lasting no more than five days", detail: "The regulation separates a guest speech or paper at a specified function from a commercial speaker or seminar leader delivering a seminar of no more than five days. It does not publish a no-pay condition, but work outside those words requires another exemption or permit.", next: "Have the host distinguish a single guest speech from the full duration of a commercial seminar, document all payments and classify any extra consulting or teaching separately." },
        "book-launch": { status: "conditional", route: "Business visitor for publisher and rights meetings; IRPR 186(j) for a qualifying author speech; local publisher or bookseller for retail", detail: "A launch should be divided into meetings, public talk, signing and sales. Business visitors representing a foreign business may sell to a Canadian business but may not make sales to the Canadian general public under the published business-visitor rule.", next: "Ask the publisher to classify the author talk, handle Canadian retail and record whether a signing or workshop adds work beyond the exempt speech." },
        "ai-teaching": { status: "conditional", route: "IRPR 186(j) for an exact speech or seminar, or the short-term high-skilled work public policy; otherwise a work permit", detail: "A qualifying commercial seminar may last no more than five days. Separately, TEER 0 or 1 work can be exempt for up to 15 consecutive days if the exemption was not used in the prior six months, or up to 30 consecutive days if not used in the prior 12 months. A publicly funded university researcher may have a separate 120-day lane. Formal or recurring teaching is not automatically covered.", next: "Have the university or event host confirm the NOC/TEER occupation, exact duties, total consecutive days and previous use of the short-work exemption." },
        "remote-work": { status: "low", route: "Digital nomad on visitor status for self-employment or an employer outside Canada", detail: "Canada expressly states that digital nomads may work online for themselves or an employer outside Canada while visiting for up to six months because they are not entering the Canadian labour market.", next: "Keep contracts, clients, employer, invoicing and principal business outside Canada; obtain a work permit before accepting Canadian employment or moving into the local labour market." },
        entrepreneur: { status: "specialist", route: "LMIA-exempt significant-benefit entrepreneur work permit or a qualifying CPTPP investor route", detail: "Canada allows an entrepreneur to seek an LMIA-exempt work permit where the proposed Canadian business would create or maintain significant social, cultural or economic benefits or Canadian jobs. The federal Start-up Visa Program stopped accepting new applications on 30 June 2026. CPTPP can facilitate qualifying Australian investors with substantial committed capital, but it still requires the immigration criteria and a pre-arranged position or arrangement.", next: "Do not build a new plan around the paused Start-up Visa. Prepare a significant-benefit and jobs case or test the investment and role against CPTPP before operating." },
        trade: { status: "conditional", route: "Business visitor for sourcing, orders, meetings and trade fairs; CPTPP for qualifying investor, professional, technician or intra-company work", detail: "Business visitors may buy Canadian goods or services and take orders while keeping remuneration and profits abroad, but may not sell to the Canadian general public. CPTPP removes the labour-market test for specified categories but requires wage, education, experience and pre-arranged-contract safeguards where applicable.", next: "Separate negotiation and order-taking from installation, fulfilment, direct retail and local employment; have the Canadian partner identify the business-visitor or CPTPP category." },
        artist: { status: "conditional", route: "IRPR 186(g) short-term performing-artist exemption when every condition fits", detail: "The exemption can cover a solo or group artistic performance and integral staff where the person is part of a foreign production or group, or a guest in a Canadian production, has a time-limited engagement and is not in an employment relationship with the Canadian contracting organisation. Performances primarily for film, television or radio are excluded.", next: "Have the promoter document the production, guest status, limited dates, contractual relationship, payment and whether film, broadcast or continuing employment is involved." },
        "mixed-mission": { status: "conditional", route: "Use the eTA for entry and map every active act to business visitor, IRPR 186, short-work, CPTPP or work-permit authority", detail: "Canada offers several flexible exemptions, but an eTA alone does not confer a right to work. A conference-attendance lane does not automatically cover teaching, Canadian clients, retail sales or a performance on the same trip.", next: "Give one lead Canadian host a complete activity and payment schedule and carry written evidence for each exemption or permit at the border." }
      },
      steps: ["Obtain the eTA before booking a flight and verify the linked passport number.", "Build one schedule separating meetings, attendance, guest speech, commercial seminar, teaching, performance, remote work, sales and company operation.", "Have the Canadian host write the exact IRPR exemption, short-work or permit rationale into the invitation packet.", "For CPTPP or entrepreneur work, begin the contract, significant-benefit and permit work well before travel and recheck current processing times.", "Carry entry documents, host contacts, payment terms and evidence that foreign business and remote work remain outside the Canadian labour market."],
      cautions: ["An eTA is an entry document, not work permission; carry proof of any work-permit exemption.", "Do not apply the five-day limit to every guest speech: it expressly applies to the commercial speaker or seminar-leader limb, while the guest-speaker limb has its own sole-purpose and function wording.", "Does overseas remote work remain self-employment or employment outside Canada, without a Canadian employer or local labour-market entry?", "Will a Canadian publisher or retailer handle sales to the public?", "The Start-up Visa is paused for new applications and International Experience Canada is unavailable at age 43.", "As checked on 21 August 2026, Canada states that foreign nationals who visited the Democratic Republic of the Congo in the previous 21 days cannot travel to Canada, alongside related residence-based Ebola measures; live-check this temporary rule when sequencing Africa and Canada."],
      sources: [
        { title: "What you need to enter Canada", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html", checked: "21 August 2026", supports: "Australian eTA requirement, land and sea distinction and current public-health sequencing restriction" },
        { title: "Electronic travel authorization facts", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/facts.html", checked: "21 August 2026", supports: "CAD $7 fee, application timing, validity and normally six-month visits" },
        { title: "Business visitors attending meetings, events and conferences", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/business/visitors-events-conferences.html", checked: "21 August 2026", supports: "business-visitor tests, activities, host actions and border packet" },
        { title: "Immigration and Refugee Protection Regulations section 186", authority: "Department of Justice Canada", url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-186.html", checked: "21 August 2026", supports: "business visitor, guest speaker, five-day seminar and performing-artist work-permit exemptions" },
        { title: "Immigration and Refugee Protection Regulations section 187", authority: "Department of Justice Canada", url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-187.html", checked: "21 August 2026", supports: "international-business, foreign-remuneration and no-public-sales boundaries" },
        { title: "Public policy facilitating entry for short-term work", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/public-policies/short-term-work-2022.html", checked: "21 August 2026", supports: "15-day, 30-day and 120-day exemptions and recurrence limits" },
        { title: "Tech Talent Strategy: digital nomads", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/committees/cimm-nov-07-2023/tech-talent-strategy-digital-nomads.html", checked: "21 August 2026", supports: "self-employed and foreign-employer remote work on visitor status" },
        { title: "Start-up Visa: about the process", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa/about.html", checked: "21 August 2026", supports: "30 June 2026 pause on new applications" },
        { title: "Entrepreneur LMIA question", authority: "Immigration, Refugees and Citizenship Canada", url: "https://ircc.canada.ca/English/helpcentre/answer.asp?qnum=1199&top=17", checked: "21 August 2026", supports: "significant-benefit or Canadian-jobs entrepreneur work permit" },
        { title: "Canada's CPTPP temporary-entry schedule", authority: "Global Affairs Canada", url: "https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/tpp-ptp/text-texte/12-a3.aspx?lang=eng", checked: "21 August 2026", supports: "Australian reciprocal investor, business visitor, professional, technician and intra-company categories" },
        { title: "International Experience Canada", authority: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html", checked: "21 August 2026", supports: "Australian participation and 18-to-35 age boundary" },
        { title: "Web Summit Vancouver 2027", authority: "Event organiser", url: "https://vancouver.websummit.com/", checked: "21 August 2026", supports: "recurring English-language technology conference opportunity signal" },
        { title: "Elevate Festival 2026", authority: "Event organiser", url: "https://elevate.ca/blog/elevate-festival-returns-2026/", checked: "21 August 2026", supports: "Toronto AI, sovereignty, technology and international-speaker opportunity signal" },
        { title: "Upper Bound 2027", authority: "Event organiser", url: "https://www.upperbound.ai/", checked: "21 August 2026", supports: "Edmonton AI conference opportunity and 2026 scale of 8,000 attendees and 250 speakers" },
        { title: "ITechLaw 2027 World Technology Law Conference call for proposals", authority: "International Technology Law Association", kind: "opportunity", url: "https://www.itechlaw.org/2026/07/22/call-for-proposals-vancouver/", checked: "21 August 2026", supports: "open Vancouver call, 28 August deadline, AI topics, speaker-fee policy and registration coverage" }
      ]
    },
    {
      "id": "germany",
      "name": "Germany",
      "flag": "🇩🇪",
      "region": "Europe",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "DEU-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "DEU-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "DEU-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "DEU-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "DEU-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "DEU-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "DEU-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "DEU-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "DEU-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "DEU-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "DEU-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "DEU-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "DEU-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "DEU-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "DEU-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "DEU-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "DEU-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "DEU-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "DEU-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "DEU-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "DEU-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "DEU-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "DEU-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "DEU-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "DEU-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "DEU-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "DEU-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "DEU-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "DEU-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-free 90 days in 180; narrow short-lecture exceptions",
      "ageNote": "Age 43 fits the visitor, short-lecture, employment, freelance and self-employed routes reviewed. The extra old-age-provision test applies only above 45; the Australian Working Holiday route ends before age 31 and is unavailable.",
      "cardSummary": "Quick Schengen entry for scouting and meetings, plus unusually specific exceptions for qualifying short lectures and cultural appearances.",
      "summary": "Germany gives an Australian passport holder visa-free Schengen entry for up to 90 days in any 180-day period, but the ordinary waiver does not itself authorise gainful employment. The useful precision is in the Employment Ordinance: qualifying foreign-employer business travel and lectures or performances of special academic or artistic value can fall outside the statutory definition of employment when their exact conditions and time limits are met. A host should document that fit before any active appearance; ordinary consulting, recurring teaching, remote work or local operation needs an appropriate residence and work basis.",
      "launch": {
        "fastestEntry": "Visa-free entry for up to 90 days in any 180-day Schengen period for tourism, reconnaissance, attendance and properly bounded business visits",
        "beforeDeparture": "Count all Schengen days and obtain an invitation stating every duty, venue, fee, expense and date. Test any lecture or performance against sections 22 and 30 of the Employment Ordinance before accepting it.",
        "usefulStay": "The ordinary short-stay ceiling is 90 days in 180. A qualifying lecture or special academic or artistic performance must also stay within 90 days in a 12-month period.",
        "hostUnlock": "A German organiser can document the academic or artistic value, overseas professional role, habitual residence abroad and exact duration, then confirm the section 22/30 treatment with the competent mission or foreigners authority where the facts are not plain.",
        "quickPacket": [
          "Australian passport",
          "Schengen day count",
          "Invitation with duties, dates, venues, fee and expenses",
          "Evidence of overseas profession and habitual residence",
          "Written route confirmation where the section 22 exception is relied upon"
        ]
      },
      "conferenceFit": {
        "label": "Established international circuit",
        "detail": "Berlin, Frankfurt and other German cities host recurring international technology, publishing, research and organisational-design events, often with English tracks or fully English programs. This is only a planning signal: German remains important for administration, local audiences and many community or industry settings.",
        "themes": [
          "AI and organisations",
          "software architecture",
          "data",
          "publishing and rights",
          "research",
          "industry and trade"
        ]
      },
      "opportunities": [
        {
          "id": "DEU-OPP-AOMA-2027",
          "checked": "21 August 2026",
          "type": "Call for speakers",
          "title": "Adaptive Organizations meet Architecture 2027",
          "deadline": "23 October 2026, 23:59 CEST",
          "deadlineISO": "2026-10-23",
          "deadlineAt": "2026-10-23T23:59:00+02:00",
          "compensation": "Accommodation is covered up to €300 for speakers from outside Berlin; travel is covered to a limit that depends on origin. No speaker fee is published.",
          "detail": "English-language Berlin conference on 6–7 April 2027 seeking actionable 40-minute sessions on adaptive organisations, software architecture and the organisational effects, risks and architectures of AI and LLM adoption.",
          "url": "https://sessionize.com/aoma-2027/"
        }
      ],
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free Schengen short stay",
          "detail": "Australians may stay for up to 90 days in any 180-day period, subject to entry conditions and the shared Schengen count.",
          "next": "Check passport validity, return plans and the rolling Schengen total immediately before travel."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-free business visit; section 16/30 protection where its foreign-employer test fits",
          "detail": "Section 16 covers qualifying meetings, negotiations, offers, contracts and contract monitoring for a foreign employer while habitual residence remains abroad, up to 90 days in 180; section 30 says that bounded activity is not employment for residence-law purposes.",
          "next": "Carry an overseas-employer or enterprise letter and keep the first visit to discussion, negotiation, contracting and observation rather than delivery."
        },
        "conference": {
          "status": "low",
          "route": "Visa-free delegate attendance",
          "detail": "Attendance and networking can use the short-stay front door; the ordinary visa waiver does not turn an attendee into a worker, trainer or programmed speaker.",
          "next": "Carry registration and the organiser invitation, and reclassify the trip if a talk, workshop or paid duty is added."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "Sections 22 and 30 for a qualifying short lecture or special academic or artistic appearance",
          "detail": "A person retaining habitual residence abroad may give lectures or performances of special academic or artistic value for no more than 90 days in 12 months without the activity being treated as employment under the Residence Act. Lack of a fee is not the legal test.",
          "next": "Have the host record why the appearance has special academic or artistic value and confirm the exception where the fit is debatable."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "The same narrow section 22/30 exception where every condition genuinely fits; otherwise obtain work-authorised residence status",
          "detail": "The statutory exception is framed by activity, value, residence abroad and duration rather than by a zero-fee rule. Ordinary paid consulting, facilitation or commercial delivery does not automatically become a qualifying lecture.",
          "next": "Put the fee, expenses, format and duties in the invitation and obtain written confirmation before relying on the exception."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Business visit for rights and publisher meetings; section 22 where a qualifying lecture or literary performance fits",
          "detail": "Rights negotiation and partner meetings can stay in the business lane. A reading, talk, workshop, direct retail operation and imported stock should be classified separately.",
          "next": "Use a German publisher or bookseller for local stock and receipts, and have the host classify each public appearance."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "Section 22 for a genuine short lecture of special academic value; work-authorised residence for recurring teaching or training",
          "detail": "A guest lecture can fit the short exception, while a course, continuing corporate training or role embedded in a German institution is a different activity.",
          "next": "Ask the university, conference or company to describe the audience, curriculum, duration and institutional relationship before choosing the route."
        },
        "remote-work": {
          "status": "not-fit",
          "route": "No dedicated digital-nomad route identified; use a freelance, self-employed or employment residence permit where eligible",
          "detail": "The general visa waiver expressly excludes taking up gainful employment and should not be treated as permission to establish an overseas remote-work base in Germany.",
          "next": "If Germany becomes a base, choose and obtain the appropriate residence permit before beginning routine work there."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Residence permit for self-employed business or freelance activity",
          "detail": "A commercial founder must show economic interest or regional need, positive economic effects and finance; freelancers show funding, lawful professional activity and other route-specific evidence. Australians may apply after visa-free entry, but must wait for authorisation before operating.",
          "next": "Choose commercial business or liberal-profession freelance status, prepare the business and finance evidence, and book the local foreigners-authority process before travel."
        },
        "trade": {
          "status": "conditional",
          "route": "Section 16 meetings and negotiations first; residence, company, tax and customs layers for local delivery",
          "detail": "Offers, contracts, negotiation and contract monitoring can fit the short business lane. Installation, hands-on service, local selling and running a German operation are separate.",
          "next": "Use the first trip for partners and contracts, then map who imports, invoices, delivers and carries local operating responsibility."
        },
        "artist": {
          "status": "conditional",
          "route": "Section 22/30 for qualifying short special performances, festivals or guest appearances; artist employment or freelance residence for broader work",
          "detail": "Special artistic performances and festival or cultural-event work can use the bounded 90-day exception; one-day events have a separate 15-day annual rule. Longer or ordinary entertainment employment needs the relevant route.",
          "next": "Have the promoter classify the production, number of days, artistic value, payment and whether the role is employed or self-employed."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Visa-free front door with a separate legal basis for each active item",
          "detail": "Tourism, attendance, negotiations and a qualifying lecture can share one visit only when each stays inside its own published boundary. Consulting, remote work, teaching, retail and performance should not be blurred together.",
          "next": "Build one dated schedule and mark every item tourism, attendance, section 16 business, section 22 lecture or performance, or permit-required work."
        }
      },
      "steps": [
        "Count the full Schengen 90-in-180 window.",
        "Obtain one invitation listing every activity, venue, payment and expense.",
        "Keep ordinary entry to tourism, attendance and bounded business activity.",
        "For any lecture or performance, test every section 22 and section 30 condition and document the result.",
        "Use a residence permit before ordinary consulting, recurring teaching, remote work or local operation."
      ],
      "cautions": [
        "Does the trip remain within the shared Schengen day count?",
        "Is the traveller acting for a foreign employer where section 16 is relied upon?",
        "Is the appearance genuinely a lecture or performance of special academic or artistic value?",
        "Does the total qualifying activity stay within 90 days in 12 months?",
        "Has a commercial talk quietly become consulting, facilitation or service delivery?",
        "Will any book or merchandise sale be handled by a German seller?",
        "Has work authorisation actually been granted before local or remote work begins?"
      ],
      "sources": [
        {
          "title": "Overview of visa requirements and exemptions",
          "authority": "German Federal Foreign Office",
          "url": "https://www.auswaertiges-amt.de/en/visa-service/231148-231148",
          "checked": "21 August 2026",
          "supports": "Australian visa exemption, 90-in-180 limit, employment exclusion and post-entry residence application privilege"
        },
        {
          "title": "Ordinance on the Employment of Foreigners",
          "authority": "Federal Ministry of Justice and Federal Office of Justice",
          "url": "https://www.gesetze-im-internet.de/englisch_beschv/englisch_beschv.html",
          "checked": "21 August 2026",
          "supports": "business travellers, short lectures and performances, Australian employment access and activities not deemed employment"
        },
        {
          "title": "How do I apply for a visa?",
          "authority": "Make it in Germany / Federal Government",
          "url": "https://www.make-it-in-germany.com/en/visa-residence/apply-for-visa",
          "checked": "21 August 2026",
          "supports": "Australian post-entry residence-permit option and no work before authorisation"
        },
        {
          "title": "Visa for self-employed business",
          "authority": "Make it in Germany / Federal Government",
          "url": "https://www.make-it-in-germany.com/en/working-in-germany/setting-up-business/visa/self-employed",
          "checked": "21 August 2026",
          "supports": "economic-interest, positive-impact, finance and over-45 tests for commercial self-employment"
        },
        {
          "title": "Visa for freelance business",
          "authority": "Make it in Germany / Federal Government",
          "url": "https://www.make-it-in-germany.com/en/working-in-germany/setting-up-business/visa/freelance",
          "checked": "21 August 2026",
          "supports": "freelance residence requirements, initial duration and over-45 test"
        },
        {
          "title": "Special regulations for artists",
          "authority": "Make it in Germany / Federal Government",
          "url": "https://www.make-it-in-germany.com/en/visa-residence/types/other/artists",
          "checked": "21 August 2026",
          "supports": "short artist exceptions, longer artist routes and over-45 old-age provision"
        },
        {
          "title": "Working Holiday Visa Programme",
          "authority": "German missions in Australia",
          "url": "https://australien.diplo.de/au-en/service/visa/working-holiday-2640582",
          "checked": "21 August 2026",
          "supports": "Australian Working Holiday age limit"
        },
        {
          "title": "Frankfurter Buchmesse 2026 tickets and program signal",
          "authority": "Frankfurter Buchmesse",
          "url": "https://www.buchmesse.de/en/press/press-releases/2026-06-24-frankfurter-buchmesse-tickets-are-sale",
          "checked": "21 August 2026",
          "supports": "international publishing, rights and author-event signal"
        },
        {
          "title": "data:unplugged 2027",
          "authority": "Event organiser",
          "url": "https://www.data-unplugged.de/en",
          "checked": "21 August 2026",
          "supports": "recurring English-language data and AI event signal"
        },
        {
          "title": "Adaptive Organizations meet Architecture 2027 call for speakers",
          "authority": "AOmA conference organiser",
          "kind": "opportunity",
          "url": "https://sessionize.com/aoma-2027/",
          "checked": "21 August 2026",
          "supports": "open call, deadline, event dates, English requirement and speaker travel terms"
        }
      ]
    },
    {
      "id": "italy",
      "name": "Italy",
      "flag": "🇮🇹",
      "region": "Europe",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "ITA-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "ITA-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "ITA-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "ITA-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "ITA-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "ITA-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "ITA-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "ITA-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "ITA-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "ITA-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "ITA-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "ITA-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "ITA-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "ITA-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "ITA-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "ITA-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "ITA-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "ITA-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "ITA-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "ITA-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "ITA-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "ITA-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "ITA-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "ITA-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "ITA-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "ITA-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ITA-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ITA-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ITA-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-free 90 days in 180 for tourism, business and invitations; professional work needs its own route",
      "ageNote": "Age 43 creates no ceiling in the visitor, digital-nomad, self-employed, entrepreneur, academic or artist routes reviewed. Italy's Australian Working Holiday visa is limited to ages 18 to 35 and is unavailable.",
      "cardSummary": "Easy short business entry and a dedicated highly qualified remote-work visa, with active speaking and teaching best classified before departure.",
      "summary": "Italy lets Australians enter visa-free for up to 90 days in any 180-day Schengen period for tourism, business and invitations. That does not create a general permission to perform professional work: official consular guidance says even a normally visa-exempt national must obtain the relevant short-stay self-employment visa when exercising a profession in Italy. The practical approach is to keep attendance, meetings and rights discussions in the visitor lane, then have the Italian host and the Australian consulate classify each talk, workshop, reading, teaching session or performance as self-employment, salaried work, entertainment or an eligible academic category. Italy also has a substantial highly qualified digital-nomad and remote-worker visa.",
      "launch": {
        "fastestEntry": "Visa-free short stay for up to 90 days in 180 for tourism, business, invitations and attendance",
        "beforeDeparture": "Separate passive attendance and meetings from every programmed appearance. Send the Italian host and the competent consulate a schedule showing duties, payment, expenses, venue, audience and contract type.",
        "usefulStay": "The visa-free Schengen ceiling is 90 days in 180. Digital-nomad and remote-worker visas may be valid for up to 365 days and require a residence-permit application within eight working days of arrival.",
        "hostUnlock": "An Italian organiser, publisher, university or promoter can supply the invitation or contract and obtain or support the category-specific clearances for self-employment, salaried employment, entertainment or academic activity.",
        "quickPacket": [
          "Australian passport and Schengen day count",
          "Italian invitation or contract",
          "Separate list of meetings, talks, teaching, readings and sales",
          "Fee, expenses and non-cash benefits",
          "Qualifications or professional-experience evidence",
          "Consular route confirmation before professional delivery"
        ]
      },
      "conferenceFit": {
        "label": "International pockets",
        "detail": "Milan, Bologna, Rome and Florence host recurring international AI, technology, publishing and cultural gatherings, with some English or bilingual stages. This is a practical language signal only: Italian is central to administration and many local, education and community settings, so a bilingual host or interpreter can materially widen the route.",
        "themes": [
          "AI and governance",
          "technology and innovation",
          "education and work",
          "publishing",
          "culture",
          "design and creative industries"
        ]
      },
      "opportunities": [
        {
          "id": "ITA-OPP-AI-FESTIVAL-2027",
          "checked": "21 August 2026",
          "type": "Call for speakers",
          "title": "AI Festival 2027",
          "deadline": "15 October 2026; closing time not published",
          "deadlineISO": "2026-10-15",
          "deadlineAt": "2026-10-15T23:59:59+02:00",
          "compensation": "The call page does not publish a speaker fee, complimentary pass, travel or accommodation terms; confirm all terms if selected.",
          "detail": "Milan event on 11–12 February 2027 seeking technical and strategic AI proposals across governance, education, public services, culture, energy and other social and industry challenges. The timestamp uses Milan end of day only as a sorting placeholder because the organiser publishes no closing time.",
          "url": "https://en.aifestival.it/call/speaker/"
        }
      ],
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free Schengen short stay",
          "detail": "Australians may enter for tourism for up to 90 days in any 180-day period, subject to the shared Schengen count and border conditions.",
          "next": "Carry the passport, accommodation, funds and onward plan and check the rolling Schengen total."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-free business purpose",
          "detail": "Official business guidance covers meetings, contacts, negotiations, industrial cooperation, company visits and related commercial activity.",
          "next": "Carry the Italian invitation stating the purpose and duration, and stop at negotiation rather than delivering the resulting service."
        },
        "conference": {
          "status": "low",
          "route": "Visa-free business or invitation purpose for attendance",
          "detail": "Attending a fair, exhibition, congress or invited event can use the short-stay front door. Joining the program as a speaker or trainer is a separate professional activity.",
          "next": "Carry registration and invitation; reclassify any panel, lecture, workshop or paid duty before travel."
        },
        "unpaid-speaking": {
          "status": "confirm",
          "route": "Host and consulate classification before departure",
          "detail": "The visa waiver includes invitations but official pages do not publish a broad exemption for a foreign professional merely because a talk is unpaid. A genuine cultural invitation may differ from professional service delivery, and expenses or other benefits should be disclosed.",
          "next": "Ask the Italian host and the competent consulate to confirm in writing whether the exact appearance remains an invitation visit or needs a work or self-employment visa."
        },
        "paid-speaking": {
          "status": "confirm",
          "route": "Short-stay self-employment visa where the category fits; salaried work or entertainment visa where the contract requires it",
          "detail": "Official consular guidance says visa-exempt nationals still need a Schengen self-employment visa to exercise their profession. Italy's quota and out-of-quota categories are specific, so a general paid keynote should not be assumed to fit without classification.",
          "next": "Give the consulate the contract, fee, professional category, host, venue and dates and obtain the correct visa before travel."
        },
        "book-launch": {
          "status": "confirm",
          "route": "Visa-free business meetings plus a separately classified appearance",
          "detail": "Publisher, agent and rights meetings fit the business lane. A public reading, workshop, appearance fee, direct retail and imported stock each add different professional, tax or customs questions.",
          "next": "Use an Italian publisher or bookseller for local stock and receipts, and have the host classify the reading or launch before announcement."
        },
        "ai-teaching": {
          "status": "specialist",
          "route": "University-professor or lecturer category where eligible; otherwise self-employment or salaried work",
          "detail": "Official self-employment material lists university professors and certain lecturers among out-of-quota categories. A conference session, guest academic task and continuing corporate course should not be treated as the same route.",
          "next": "Have the institution identify its legal category and provide the invitation or contract and required labour or police clearances."
        },
        "remote-work": {
          "status": "specialist",
          "route": "Digital Nomad or Remote Worker visa",
          "detail": "The route is for highly qualified remote activity: self-employed digital nomads use technology to work independently, while remote workers may work for an employer or client in Italy or abroad. Published requirements include qualifying education or experience, at least six months' prior experience, annual income of at least three times €8,500, accommodation and health insurance. Even a visa-exempt national is told to obtain this visa for a stay of 90 days or less.",
          "next": "Use the Sydney consular checklist, prove the qualification and income route, and allow for the residence-permit step within eight working days of entry."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Italia Startup Visa or a qualifying self-employment entrepreneur route",
          "detail": "An innovative startup route uses committee clearance and at least €50,000 dedicated funding. The current quota entrepreneur category requires an Italian-economy project with at least €500,000 investment and three new jobs; ownership does not replace personal work permission.",
          "next": "Choose innovative startup, quota entrepreneur or another self-employment category before building the company and visa packet."
        },
        "trade": {
          "status": "conditional",
          "route": "Visa-free business entry for fairs, negotiations and contracts; work and commercial setup for delivery",
          "detail": "Trade fairs, factory visits, negotiations and equipment verification are published business purposes. Hands-on installation, professional training, local retail and operating an Italian business need closer classification.",
          "next": "Use the first trip for partners and contracts, then map importer, seller, service provider, tax and work responsibility."
        },
        "artist": {
          "status": "specialist",
          "route": "Short-stay self-employment or salaried entertainment visa",
          "detail": "Short self-employed entertainment visas can sit outside quotas, but the published artist category is limited to renowned or highly qualified artists or recognised institutions and requires a contract. Salaried entertainment uses its own employment process.",
          "next": "Have the Italian promoter choose employed or self-employed entertainment and confirm the artist threshold, contract and clearances."
        },
        "mixed-mission": {
          "status": "confirm",
          "route": "Visa-free attendance and business elements plus separate permission for each professional element",
          "detail": "Italy's visitor purposes are broad enough for scouting, invitations and negotiation but not a substitute for professional-work classification. Speaking, teaching, remote work, performance and direct sales each retain their own route.",
          "next": "Send one complete schedule to the principal host and competent consulate and secure every required visa or clearance before departure."
        }
      },
      "steps": [
        "Count the shared Schengen 90-in-180 window.",
        "Use visa-free entry only for the tourism, invitation, attendance and business activities that fit.",
        "Create one schedule separating meetings, public appearances, teaching, performance, remote work and sales.",
        "Have the Italian host and competent consulate classify each professional activity before departure.",
        "For a longer remote base, prepare the highly qualified Digital Nomad or Remote Worker visa and post-arrival residence permit."
      ],
      "cautions": [
        "Is the traveller attending or delivering part of the program?",
        "Does an unpaid invitation still amount to professional service or performance?",
        "Which quota or out-of-quota category, if any, covers a paid keynote or workshop?",
        "Is the contract self-employed, salaried or entertainment work?",
        "Does the digital-nomad applicant meet the qualification, experience and income evidence tests?",
        "Will an Italian publisher or seller handle books and merchandise?",
        "Has the route been confirmed by the consular office that actually serves the Australian residence address?"
      ],
      "sources": [
        {
          "title": "Countries exempt from short-stay visas",
          "authority": "Italian Ministry of Foreign Affairs and International Cooperation",
          "url": "https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/paesi_esenti_visto/",
          "checked": "21 August 2026",
          "supports": "Australian 90-in-180 exemption for tourism, business and invitations"
        },
        {
          "title": "Reforms and regulatory framework for foreign investment",
          "authority": "Italian Ministry of Foreign Affairs and International Cooperation",
          "url": "https://www.esteri.it/en/temi/diplomazia_economica/l-attrazione-degli-investimenti/riforme-e-quadro-normativo-per-gli-investimenti-esteri/",
          "checked": "21 August 2026",
          "supports": "meetings, negotiations, company visits, trade fairs and equipment-related business purposes"
        },
        {
          "title": "Entry into Italy",
          "authority": "Italian Ministry of Foreign Affairs and International Cooperation",
          "url": "https://www.esteri.it/en/ministero/sportello_info/domandefrequenti/sezione_visti_entrare_in_italia/",
          "checked": "21 August 2026",
          "supports": "short-stay limit and work-entry framework"
        },
        {
          "title": "Self-Employment Schengen Visa",
          "authority": "Consulate General of Italy in Toronto",
          "url": "https://constoronto.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/visti-schengen/self-employment-schengen-visa/",
          "checked": "21 August 2026",
          "supports": "visa requirement for normally visa-exempt nationals undertaking short professional self-employment"
        },
        {
          "title": "Self-employment visa checklist",
          "authority": "Consulate General of Italy in Moscow",
          "url": "https://consmosca.esteri.it/wp-content/uploads/2026/07/selfemploy.pdf",
          "checked": "21 August 2026",
          "supports": "current entrepreneur, startup, artist and academic self-employment categories"
        },
        {
          "title": "2026 entry visa for self-employment checklist",
          "authority": "Embassy of Italy in Tbilisi",
          "url": "https://ambtbilisi.esteri.it/wp-content/uploads/2026/05/LAVORO-AUTONOMO_ENG-final.pdf",
          "checked": "21 August 2026",
          "supports": "current quota and out-of-quota documentation and thresholds"
        },
        {
          "title": "Digital Nomad and Remote Worker visa checklist",
          "authority": "Consulate General of Italy in Sydney",
          "url": "https://conssydney.esteri.it/wp-content/uploads/2024/12/Nomadi-digitali-e-remoti-aggiornato_12.24.pdf",
          "checked": "21 August 2026",
          "supports": "Australian qualification, experience, income, insurance and accommodation requirements"
        },
        {
          "title": "Digital Nomads and Remote Workers",
          "authority": "Embassy of Italy in Singapore",
          "url": "https://ambsingapore.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/digital-nomads-and-remote-workers/",
          "checked": "21 August 2026",
          "supports": "visa required even for visa-exempt short stays and residence permit within eight working days"
        },
        {
          "title": "Working Holiday Visa checklist",
          "authority": "Consulate General of Italy in Sydney",
          "url": "https://conssydney.esteri.it/wp-content/uploads/2026/07/WORKING-HOLIDAY-VISA-checklist.pdf",
          "checked": "21 August 2026",
          "supports": "Australian age limit of 18 to 35"
        },
        {
          "title": "We Make Future 2027 call for speakers",
          "authority": "Event organiser",
          "url": "https://en.wemakefuture.it/call/speaker/",
          "checked": "21 August 2026",
          "supports": "international innovation and AI event signal with an open but undated call"
        },
        {
          "title": "AI Festival 2027 call for speakers",
          "authority": "AI Festival / WMF organiser",
          "kind": "opportunity",
          "url": "https://en.aifestival.it/call/speaker/",
          "checked": "21 August 2026",
          "supports": "open call, event dates, themes and 15 October 2026 second-phase deadline"
        }
      ]
    },
    {
      "id": "spain",
      "name": "Spain",
      "flag": "🇪🇸",
      "region": "Europe",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "ESP-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "ESP-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "ESP-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "ESP-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "ESP-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "ESP-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "ESP-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "ESP-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "ESP-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "ESP-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "ESP-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "ESP-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "ESP-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "ESP-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "ESP-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "ESP-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "ESP-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "ESP-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "ESP-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "ESP-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "ESP-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "ESP-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "ESP-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "ESP-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "ESP-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "ESP-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "ESP-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "ESP-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "ESP-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-free 90 days in 180 for tourism and business; any remunerated activity needs a visa",
      "ageNote": "Age 43 fits the visitor, digital-nomad, self-employed, entrepreneur, university and cultural routes reviewed. The Australian Working Holiday route is limited to ages 18 to 30 and is unavailable.",
      "cardSummary": "Straightforward tourism, meetings and conference attendance, with strong remote-worker and innovation routes and clear visas for remunerated activity.",
      "summary": "Spain allows Australian passport holders visa-free Schengen travel for tourism and business for up to 90 days in any 180-day period. Professional trips can be evidenced with a company invitation, meeting documents or a trade-fair or congress pass, but the Sydney Consulate expressly says remunerated activity of any duration requires a visa. Spain then offers several useful specialist lanes: self-employed work, an innovative entrepreneur route, international telework, university teaching and research exemptions, and artist or audiovisual-cultural processes. An unpaid public talk outside those named categories remains a host-and-consulate classification question rather than an automatic visitor privilege.",
      "launch": {
        "fastestEntry": "Visa-free Schengen entry for tourism, scouting, meetings, trade-fair visits and conference attendance for up to 90 days in 180",
        "beforeDeparture": "Carry proof of purpose and split every active appearance from attendance. If there is any fee, honorarium or other remuneration, obtain the correct Spanish visa before travel.",
        "usefulStay": "The short-stay ceiling is 90 days in 180 across Schengen. International telework, entrepreneur and work routes support residence when Spain becomes a base or place of delivery.",
        "hostUnlock": "A Spanish university, organiser, promoter or customer can provide the invitation or contract and identify whether the activity uses a work-permit-exemption visa, self-employed work visa, employee route, entrepreneur route or cultural-sector process.",
        "quickPacket": [
          "Australian passport and Schengen day count",
          "Company, university or organiser invitation",
          "Congress or trade-fair registration",
          "Activity, fee, expense and venue schedule",
          "Qualifications and professional evidence",
          "Spanish visa or authorisation where required"
        ]
      },
      "conferenceFit": {
        "label": "International hubs",
        "detail": "Barcelona and Madrid host recurring international startup, smart-city, technology and publishing gatherings with substantial English participation. This remains a modest planning signal, not a value ranking: Spanish is the main language for administration and much of the local, education and civic circuit, while regional languages can also matter.",
        "themes": [
          "AI and startups",
          "smart cities",
          "universities and spin-offs",
          "climate technology",
          "publishing",
          "policy and civic technology"
        ]
      },
      "opportunities": [
        {
          "id": "ESP-OPP-4YFN-2027",
          "checked": "21 August 2026",
          "type": "Call for speakers",
          "title": "4YFN Barcelona 2027",
          "deadline": "5 November 2026, 23:00 CET",
          "deadlineISO": "2026-11-05",
          "deadlineAt": "2026-11-05T23:00:00+01:00",
          "compensation": "There is no cost to speak and no speaker payment. Travel and accommodation support are not published on the call page.",
          "detail": "Barcelona call for founders, investors, innovators and industry leaders for 1–4 March 2027. Tracks include Agentic AI, corporate innovation, founders, investors, universities and spin-offs. A proposal should anchor the larger vision in a real build, decision or lesson.",
          "url": "https://www.4yfn.com/call-for-speakers/"
        }
      ],
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free Schengen short stay",
          "detail": "Australians may visit for tourism for up to 90 days in any 180-day period, subject to border evidence and the shared Schengen count.",
          "next": "Carry proof of accommodation, funds and return or onward travel and recalculate the rolling total."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-free professional business trip",
          "detail": "Spain's entry guidance recognises company or authority invitations, evidence of a professional relationship and trade-fair or congress access cards as proof of a short business purpose.",
          "next": "Keep the trip to meetings, negotiation, investigation and relationship building rather than contracted delivery."
        },
        "conference": {
          "status": "low",
          "route": "Visa-free congress attendance",
          "detail": "Conference attendance can use the short business front door with registration or an access card. Speaking, training, performing and paid event duties are separate.",
          "next": "Carry registration and invitation and reclassify the trip immediately if the organiser adds a programmed role."
        },
        "unpaid-speaking": {
          "status": "confirm",
          "route": "Visitor only if the exact non-gainful activity is accepted; otherwise a work, exemption or cultural route",
          "detail": "Spain publishes a visitor lane for non-gainful activity and named exemptions for university, public-research and artist work, but no broad official rule making every unpaid conference talk a visitor activity.",
          "next": "Have the organiser and competent Spanish consulate confirm the exact zero-fee role, expenses, commercial context and visa requirement before departure."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "Self-employed or employee work visa; named work-permit exemption where the facts qualify",
          "detail": "The Sydney Consulate says remunerated activity requires a visa whatever its duration. Professors invited by Spanish universities, certain public researchers and artists can use specific exemption-visa processes; a general keynote does not automatically fit.",
          "next": "Give the host and consulate the contract, payment, duration and professional category and secure the visa before travel."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Visa-free publisher and rights meetings plus separately classified public appearance",
          "detail": "Business discussions can use the visitor lane, while a remunerated reading or professional launch requires a visa and a zero-fee programmed appearance still needs classification. Direct retail and imported stock add commercial and customs layers.",
          "next": "Use a Spanish publisher or bookseller for local stock and receipts and classify the author appearance separately."
        },
        "ai-teaching": {
          "status": "specialist",
          "route": "University work-permit-exemption visa where invited; self-employed or employee route otherwise",
          "detail": "Professors, technicians, researchers and scientists invited or hired by a Spanish university for teaching, research or academic tasks are named in the exemption system, with different visa treatment by length. Corporate training or a continuing teaching role needs its applicable work route.",
          "next": "Have the university's legal representative issue the invitation or contract; otherwise use the normal self-employed or employee process."
        },
        "remote-work": {
          "status": "specialist",
          "route": "International Telework or Digital Nomad visa",
          "detail": "The route supports remote work for an employer or company outside Spain using telecommunications. A self-employed applicant may have Spanish work up to 20% of total professional activity and must show a degree or at least three years' current-field experience, a prior relationship with the foreign company and social-security compliance.",
          "next": "Use the Australian consular checklist and obtain employer or client consent, company evidence, qualification evidence and the correct social-security certificate or Spanish registration."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Entrepreneur visa or residence authorisation under Law 14/2013",
          "detail": "The project must be innovative or of special economic interest for Spain and receive a favourable report. Current UGE guidance says there is no fixed minimum investment or job-creation number; it evaluates the founder, plan, finance, innovation and added value.",
          "next": "Prepare the founder profile, business plan and financing and seek the favourable project report before moving to operate."
        },
        "trade": {
          "status": "conditional",
          "route": "Visa-free meetings, fairs and negotiations; work and commercial permission for service delivery",
          "detail": "Professional visits and trade-fair access are recognised short-stay evidence. Selling directly, installing, training customers or fulfilling a contract locally can become remunerated work.",
          "next": "Use the first trip for partners and contracts, then map importer, seller, service delivery, tax and work status."
        },
        "artist": {
          "status": "specialist",
          "route": "Artist work-permit-exemption visa or audiovisual and cultural-sector route",
          "detail": "Artists performing in Spain appear in the exemption-visa system, and the UGE manages residence pathways for audiovisual and cultural workers. The correct process depends on duration, production, contract and role.",
          "next": "Have the Spanish promoter identify the artist or cultural process, list all dates and payments and obtain the visa or authorisation before performance."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Visa-free visitor elements plus a visa or authorisation for every active or remunerated element",
          "detail": "Tourism, meetings and attendance can share the short stay. A talk, course, consulting session, performance, remote-work base or direct sale retains its own boundary.",
          "next": "Build one dated schedule and obtain written host or consular classification for each active item before travel."
        }
      },
      "steps": [
        "Count the shared Schengen 90-in-180 window.",
        "Carry the invitation, professional-trip evidence or congress access card for meetings and attendance.",
        "List every talk, class, performance, fee and non-cash benefit separately.",
        "Obtain a visa before any remunerated activity, regardless of trip length.",
        "Use the university, telework, entrepreneur, self-employed or cultural specialist route when its published test fits."
      ],
      "cautions": [
        "Is the traveller merely attending or joining the program?",
        "Is an unpaid talk genuinely non-gainful and accepted by the consulate?",
        "Does any fee, honorarium, travel package or benefit make the activity remunerated?",
        "Is a university or public body eligible to sponsor the named work-permit exemption?",
        "Does remote work stay within the foreign-company and 20% Spanish-client boundary?",
        "Has a local seller taken responsibility for books and merchandise?",
        "Is the Working Holiday assumption being wrongly carried over despite the age ceiling?"
      ],
      "sources": [
        {
          "title": "Conditions for entry into Spain",
          "authority": "Consulate General of Spain in Sydney",
          "url": "https://exteriores.gob.es/Consulados/sydney/en/ServiciosConsulares/Paginas/Consular/Condiciones-de-entrada-en-Espana.aspx",
          "checked": "21 August 2026",
          "supports": "90-in-180 entry conditions and evidence for professional trips, fairs and congresses"
        },
        {
          "title": "Schengen visas",
          "authority": "Consulate General of Spain in Sydney",
          "url": "https://www.exteriores.gob.es/Consulados/sydney/en/ServiciosConsulares/Paginas/Consular/Visados-Schengen.aspx",
          "checked": "21 August 2026",
          "supports": "Australian tourism and business exemption and visa requirement for remunerated activity"
        },
        {
          "title": "Visa for digital nomads",
          "authority": "Embassy of Spain in Canberra",
          "url": "https://www.exteriores.gob.es/Embajadas/canberra/en/ServiciosConsulares/Paginas/Consular/Visa-for-digital-nomads.aspx",
          "checked": "21 August 2026",
          "supports": "foreign-company, 20% Spanish activity, experience and social-security requirements"
        },
        {
          "title": "Self-employed work visa",
          "authority": "Consulate General of Spain in Sydney",
          "url": "https://www.exteriores.gob.es/Consulados/sydney/en/ServiciosConsulares/Paginas/Consular/Visado-de-trabajo-por-cuenta-propia.aspx",
          "checked": "21 August 2026",
          "supports": "two-stage self-employed permit and visa process, licences, business plan and finance"
        },
        {
          "title": "Entrepreneur visa",
          "authority": "Consulate General of Spain in Sydney",
          "url": "https://exteriores.gob.es/Consulados/sydney/en/ServiciosConsulares/Paginas/Consular/Visado-para-emprendedor.aspx",
          "checked": "21 August 2026",
          "supports": "innovative project and favourable-report visa route"
        },
        {
          "title": "Entrepreneurs",
          "authority": "Spanish Ministry of Inclusion, Social Security and Migration / UGE",
          "url": "https://www.inclusion.gob.es/en/web/unidadgrandesempresas/emprendedores",
          "checked": "21 August 2026",
          "supports": "current entrepreneur tests and absence of fixed minimum investment or job number"
        },
        {
          "title": "Resident visa with work permit exemption",
          "authority": "Consulate General of Spain in Sydney",
          "url": "https://www.exteriores.gob.es/Consulados/sydney/en/ServiciosConsulares/Paginas/Resident-visa---work-permit-exemption.aspx",
          "checked": "21 August 2026",
          "supports": "short and longer public-research and artist exemption processes"
        },
        {
          "title": "Residence visa with work permit exemption",
          "authority": "Embassy of Spain in Washington",
          "url": "https://www.exteriores.gob.es/Consulados/washington/en/ServiciosConsulares/Paginas/Consular/Residence-visa-with-work-permit-exemption.aspx",
          "checked": "21 August 2026",
          "supports": "Article 88 university teaching, research and academic categories and length bands"
        },
        {
          "title": "Authorisations and requirements",
          "authority": "Spanish Ministry of Inclusion, Social Security and Migration / UGE",
          "url": "https://www.inclusion.gob.es/en/web/unidadgrandesempresas/autorizaciones-y-requisitos",
          "checked": "21 August 2026",
          "supports": "entrepreneur, teleworker, researcher and audiovisual-cultural residence pathways"
        },
        {
          "title": "Working Holiday visa",
          "authority": "Consulate General of Spain in Sydney",
          "url": "https://exteriores.gob.es/Consulados/sydney/en/ServiciosConsulares/Paginas/Work-and-Holiday.aspx",
          "checked": "21 August 2026",
          "supports": "Australian age limit of 18 to 30"
        },
        {
          "title": "4YFN Barcelona 2027 call for speakers",
          "authority": "GSMA / 4YFN organiser",
          "kind": "opportunity",
          "url": "https://www.4yfn.com/call-for-speakers/",
          "checked": "21 August 2026",
          "supports": "open call, deadline, event dates, tracks and published speaker-payment terms"
        }
      ]
    },
    {
      "id": "uruguay",
      "name": "Uruguay",
      "flag": "🇺🇾",
      "region": "South America",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "URY-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "URY-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "URY-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "URY-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "URY-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "URY-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "URY-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "URY-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "URY-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "URY-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "URY-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "URY-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "URY-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "URY-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "URY-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "URY-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "URY-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "URY-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "URY-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "URY-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "URY-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "URY-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "URY-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "URY-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "URY-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "URY-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "URY-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "URY-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "URY-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "No visa for an Australian ordinary passport; ordinary short stay 90 days with an extension route",
      "ageNote": "Age 43 creates no ceiling in the visitor, invited-professional, provisional-identity, temporary-residence, entrepreneur or artist routes reviewed. Youth Working Holiday programs generally use an 18-to-30 band and are not the relevant route.",
      "cardSummary": "Visa-free arrival, legally recognised short invited-professional categories and a flexible provisional identity route for work or foreign remote activity.",
      "summary": "Uruguay does not require an admission visa from an Australian ordinary-passport holder. Its migration law is unusually useful for a fast-moving itinerary: non-resident categories expressly include people invited by public or private bodies because of their profession or art, business people and members of public artistic or cultural performances. A non-resident may act only inside the category granted, so the Uruguayan host should have Migration confirm the exact speaking, teaching or performance purpose rather than treating every arrival as tourism. If a short engagement needs formal work status, the Provisional Identity Card can cover activity below 180 days and renew once; residence, rather than a separately named work permit, authorises longer dependent or independent work.",
      "launch": {
        "fastestEntry": "Visa-free admission for an Australian ordinary passport, normally for a 90-day short stay",
        "beforeDeparture": "Carry a Spanish or bilingual invitation stating whether the purpose is tourism, business, conference attendance, an invited professional appearance, teaching or an artistic or cultural performance. Ask the host to confirm the admission category with the National Directorate of Migration.",
        "usefulStay": "The ordinary short stay is 90 days and has a 90-day extension process. A Provisional Identity Card can support activity for up to 180 days and may be renewed once for another 180 days.",
        "hostUnlock": "A Uruguayan public body, company, university, conference, publisher or promoter can document the exact professional or artistic invitation and, if the non-resident category is insufficient, support a Provisional Identity Card or temporary-residence application.",
        "quickPacket": [
          "Australian passport",
          "Return or onward plan and accommodation",
          "Spanish or bilingual host invitation",
          "Duties, venues, dates, fee and expenses",
          "Professional or artistic evidence",
          "Migration confirmation or provisional-identity application where needed"
        ]
      },
      "conferenceFit": {
        "label": "Spanish-primary with international openings",
        "detail": "Montevideo has recurring AI, data, education, research, government and technology gatherings, including some international participation. Spanish is the normal working language for most local events and administration; English may work in selected international settings, but a Spanish abstract, bilingual host or interpreter will open far more of the country.",
        "themes": [
          "AI and data science",
          "AI ethics and safety",
          "education",
          "digital government",
          "research",
          "regional trade"
        ]
      },
      "opportunities": [
        {
          "id": "URY-OPP-CONNECTIA-2026",
          "checked": "21 August 2026",
          "type": "Call for speakers",
          "title": "ConnectIA 2026",
          "deadline": "20 September 2026, 23:59; Sessionize does not print a zone",
          "deadlineISO": "2026-09-20",
          "deadlineAt": "2026-09-20T23:59:00-03:00",
          "compensation": "The call publishes no speaker fee, travel, accommodation or complimentary-pass terms; the public event itself is free.",
          "detail": "Spanish-language AI and data-science conference at Auditorio del LATU in Montevideo on 31 October 2026, seeking practical or research-led 30-minute talks plus questions on applied AI, agents, LLMs, education, architectures, MLOps, ethics, safety and responsibility. The timestamp uses Montevideo local time because the call page omits a zone.",
          "url": "https://sessionize.com/connectia2026/"
        }
      ],
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free non-resident tourist admission",
          "detail": "An Australian ordinary passport does not need a visa. The ordinary visitor period is 90 days and an extension process is available.",
          "next": "Carry evidence of purpose and apply for any extension before the authorised stay expires."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-free non-resident business category",
          "detail": "Uruguay's migration law includes business people among non-residents, and official business-visa material defines business, investment and commercial exchange as recognised purposes for nationalities that do require a visa.",
          "next": "Carry the Uruguayan invitation and keep the visit to meetings, investment exploration and negotiation unless Migration confirms a delivery category."
        },
        "conference": {
          "status": "low",
          "route": "Visa-free conference or seminar attendance with invitation",
          "detail": "Uruguay publishes a congress, convention and seminar purpose for visa-required nationals; an Australian does not need the visa but should carry the organiser invitation and remain an attendee unless a speaking role is classified.",
          "next": "Carry registration and reclassify the visit if the organiser adds a talk, workshop or fee."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "Non-resident invited-professional or art category where Migration confirms the fit",
          "detail": "The migration law expressly includes people invited by a public or private entity because of their profession or art. The rule is category-bound, and a zero fee alone does not establish the correct admission status.",
          "next": "Have the host send Migration the invitation, duties, expenses and dates and obtain written confirmation before delivery."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "Confirmed non-resident invited-professional category or Provisional Identity Card",
          "detail": "A short invited professional appearance may fit the specific non-resident category, but non-residents may not work outside the activity granted. Where Migration does not accept that classification, a Provisional Identity Card can formalise activity below 180 days.",
          "next": "Give the host the contract, fee, venues and dates and have Migration choose the category or provisional-identity process before the talk."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Business and invited-professional categories, with a local publisher or bookseller for retail",
          "detail": "Rights and publisher meetings fit business logic, while a reading or public appearance should be confirmed as an invited professional or artistic activity. Direct stock import and sales are separate commercial matters.",
          "next": "Use a Uruguayan publisher or bookseller for local receipts and have Migration classify the public appearance."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "Invited-professional category for a confirmed short appearance; Provisional Identity Card or temporary residence for contracted teaching",
          "detail": "Temporary-residence categories expressly include scientists, researchers, teachers, professionals, academics, technicians and specialists contracted for their expertise. A single invited lecture may fit the non-resident category if Migration confirms it.",
          "next": "Have the university or organisation state whether this is an invited lecture, a short service or a teaching appointment and sponsor the corresponding status."
        },
        "remote-work": {
          "status": "specialist",
          "route": "Digital-nomad Provisional Identity Card",
          "detail": "The permit supports remote activity from Uruguay for entities established abroad, lasts up to 180 days and may be renewed once. It does not permit work for a company incorporated or permanently established in Uruguay. Current official pages conflict on whether BPS social-security registration is required, so that point needs direct confirmation.",
          "next": "Apply in-country with the passport and sworn declaration, confirm the foreign-entity boundary and ask Migration or BPS for written social-security treatment."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Business reconnaissance followed by temporary or permanent residence and ordinary company setup",
          "detail": "Business visitors can explore and negotiate. Residence authorises dependent or independent work, and temporary-residence categories include entrepreneurs, directors and managers; company, BPS and tax registration remain separate.",
          "next": "Use the first trip for partners and structure, then choose residence and company form before operating locally."
        },
        "trade": {
          "status": "conditional",
          "route": "Visa-free business category for investment and commercial exchange; residence and company layers for local operation",
          "detail": "Negotiation, sourcing and investment exploration can use the business purpose. Local service delivery, retail, employment, importing and an ongoing commercial presence need their ordinary work, company, tax and customs treatment.",
          "next": "Identify the importer, seller, invoice issuer and service provider before moving from negotiation to execution."
        },
        "artist": {
          "status": "conditional",
          "route": "Non-resident public artistic or cultural performance category, or Provisional Identity Card or temporary residence",
          "detail": "Migration law expressly includes members of public artistic or cultural performances among non-residents and separately recognises contracted artists for temporary residence. The host should confirm which category covers the production and payment.",
          "next": "Have the promoter list every performance, rehearsal, fee and venue and obtain Migration's classification before travel."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Visa-free front door with the exact non-resident category or provisional status for each active item",
          "detail": "Tourism, business, attendance, invited professional activity and artistic performance are distinct recognised categories. Remote work, contracted teaching, local operation and direct sales may require the Provisional Identity Card or residence.",
          "next": "Give one Spanish or bilingual schedule to the principal host and Migration and label each item by purpose before departure."
        }
      },
      "steps": [
        "Enter visa-free with the Australian passport and evidence of the declared purpose.",
        "Use a Spanish or bilingual invitation to identify business, conference, invited-professional or artistic activity.",
        "Have the host confirm the non-resident category with Migration before any active appearance.",
        "Use the Provisional Identity Card for short work or foreign remote activity where required.",
        "Move to temporary or permanent residence before longer local work or company operation."
      ],
      "cautions": [
        "Will the arrival be recorded in the correct non-resident category rather than merely as tourism?",
        "Does the invitation describe the exact profession, art, duties, payment and duration?",
        "Is the proposed activity inside the non-resident category granted?",
        "Does a short engagement need a Provisional Identity Card?",
        "Does remote work stay entirely with an entity outside Uruguay and outside any Uruguayan permanent establishment?",
        "Which official BPS position applies to the digital-nomad permit?",
        "Will a local publisher, seller or importer handle stock and receipts?"
      ],
      "sources": [
        {
          "title": "Admission visa regime",
          "authority": "Uruguayan Ministry of the Interior",
          "url": "https://www.gub.uy/ministerio-interior/comunicacion/publicaciones/regimen-visas-admision",
          "checked": "21 August 2026",
          "supports": "Australian ordinary-passport visa exemption"
        },
        {
          "title": "Migration Law No. 18,250",
          "authority": "Uruguay Official Gazette / IMPO",
          "url": "https://www.impo.com.uy/bases/leyes/18250-2008",
          "checked": "21 August 2026",
          "supports": "resident work rights and non-resident tourist, business, invited-professional and artistic categories"
        },
        {
          "title": "Decree No. 394/009, Article 13",
          "authority": "Uruguay Official Gazette / IMPO",
          "url": "https://www.impo.com.uy/bases/decretos/394-2009/13",
          "checked": "21 August 2026",
          "supports": "90-day non-resident stay and one 90-day renewal for tourist, invited-professional, business and artistic categories"
        },
        {
          "title": "Hiring foreign workers in dependent employment",
          "authority": "Uruguayan Ministry of Labour and Social Security",
          "url": "https://www.gub.uy/ministerio-trabajo-seguridad-social/politicas-y-gestion/contratacion-trabajadores-extranjeros-bajo-regimen-dependencia-laboral",
          "checked": "21 August 2026",
          "supports": "residence as work authority, absence of a separately named work permit and hiring while residence is in progress"
        },
        {
          "title": "Types of residence",
          "authority": "Uruguayan Ministry of Foreign Affairs",
          "url": "https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/publicaciones/tipos-de-residencia",
          "checked": "21 August 2026",
          "supports": "teacher, academic, specialist, entrepreneur, manager and artist temporary-residence categories"
        },
        {
          "title": "Provisional Identity Card",
          "authority": "Uruguayan Ministry of the Interior / National Directorate of Migration",
          "url": "https://www.gub.uy/tramites/hoja-identidad-provisoria",
          "checked": "21 August 2026",
          "supports": "under-180-day activity and digital-nomad application and renewal requirements"
        },
        {
          "title": "Decree No. 238/022",
          "authority": "Uruguay Official Gazette / IMPO",
          "url": "https://www.impo.com.uy/bases/decretos-originales/238-2022/1",
          "checked": "21 August 2026",
          "supports": "foreign-entity remote-work permission, 180-day duration, one renewal and statutory social-security wording"
        },
        {
          "title": "Entry and hiring people",
          "authority": "Uruguay Investment Single Window",
          "url": "https://vui.gub.uy/procesos/ingreso-y-contratacion-de-personas/",
          "checked": "21 August 2026",
          "supports": "digital-nomad foreign-company boundary, duration and current social-security guidance"
        },
        {
          "title": "Working Holiday for foreign citizens",
          "authority": "Uruguayan Ministry of Foreign Affairs",
          "url": "https://www.gub.uy/tramites/vacaciones-trabajo-working-holiday-vacaciones-trabajo-working-holiday-ciudadanos-extranjeros",
          "checked": "21 August 2026",
          "supports": "youth age band and Working Holiday distinction"
        },
        {
          "title": "ConnectIA 2026",
          "authority": "Data Science UY / event organiser",
          "url": "https://connectia.uy/",
          "checked": "21 August 2026",
          "supports": "Spanish-language AI and data-science event signal, location and free public access"
        },
        {
          "title": "ConnectIA 2026 call for speakers",
          "authority": "ConnectIA organiser",
          "kind": "opportunity",
          "url": "https://sessionize.com/connectia2026/",
          "checked": "21 August 2026",
          "supports": "open call, deadline, event date, talk format and topic scope"
        }
      ]
    },
    {
      "id": "japan",
      "name": "Japan",
      "flag": "🇯🇵",
      "region": "East Asia",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "JPN-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "JPN-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "JPN-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "JPN-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "JPN-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "JPN-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "JPN-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "JPN-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "JPN-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "JPN-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "JPN-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "JPN-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "JPN-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "JPN-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "JPN-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "JPN-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "JPN-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "JPN-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "JPN-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "JPN-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "JPN-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "JPN-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "JPN-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "JPN-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "JPN-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "JPN-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "JPN-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "JPN-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "JPN-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-exempt visitor entry, normally 90 days",
      "ageNote": "Age 43 fits the visitor, working-status, digital-nomad and business-manager routes; Japan's Australia working-holiday route is limited to ages 18–30.",
      "cardSummary": "Easy attendance and business reconnaissance, a six-month overseas-remote-work route, and host-led status selection for any paid delivery.",
      "summary": "Japan gives an Australian passport holder a fast 90-day front door for tourism, conferences, seminars, meetings, negotiations and market research, but Temporary Visitor status does not permit remuneration or income-producing work. That boundary makes the invitation decisive: paid speaking, teaching, consulting or performance needs an activity-matched working status, while the Digital Nomad route supports up to six months of qualifying overseas work.",
      "launch": {
        "fastestEntry": "Visa-exempt Temporary Visitor entry, normally up to 90 days",
        "beforeDeparture": "Carry an onward plan and an invitation that separates attendance, unpaid participation, remuneration, sales and service delivery.",
        "usefulStay": "Normally 90 days as a Temporary Visitor; the Digital Nomad route allows six months and is not extendable.",
        "hostUnlock": "A Japanese organiser, university, publisher, promoter or company can identify the correct Professor, Artist, Entertainer, Instructor, Researcher, Engineer/Specialist in Humanities/International Services or other status and support the Certificate of Eligibility process.",
        "quickPacket": [
          "Australian passport",
          "Onward itinerary and accommodation",
          "Invitation and program",
          "Written fee, expenses, duties and sales breakdown"
        ]
      },
      "conferenceFit": {
        "label": "Selected international tracks",
        "detail": "Tokyo, Osaka and Fukuoka have recurring international AI, data-centre, startup and research events with English interfaces and some English or interpreted program tracks. Japanese remains important for domestic sessions, organisers, local press and relationship-building; this is a preparation clue, not a country priority score.",
        "themes": [
          "AI",
          "data centres",
          "startups",
          "research",
          "publishing",
          "creative technology"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-exempt Temporary Visitor",
          "detail": "Australians can normally receive a 90-day landing permission for a short non-remunerated visit.",
          "next": "Keep proof of onward travel, accommodation and funds available and confirm the granted period at entry."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-exempt Temporary Visitor for short business activity",
          "detail": "Business liaison, negotiation, contract signing, market research, after-sales contact and publicity can fit when the traveller is not remunerated in Japan and does not operate an income-producing business.",
          "next": "Carry the Japanese invitation and keep delivery of services outside the visitor schedule."
        },
        "conference": {
          "status": "low",
          "route": "Visa-exempt Temporary Visitor for attendance",
          "detail": "Participation as an attendee at conferences, seminars and briefings is within the published temporary-visitor examples.",
          "next": "If the organiser adds a lecture, workshop, performance or fee, have them reclassify the activity before travel."
        },
        "unpaid-speaking": {
          "status": "confirm",
          "route": "Mission confirmation under Temporary Visitor, or host-selected working status",
          "detail": "Conference participation can fit Temporary Visitor status, but the published material does not create a blanket permission for every active lecture merely because no fee is paid. Reimbursements, promotion, repeated dates and service-like delivery can change the analysis.",
          "next": "Give the Japanese mission the invitation, agenda, expenses and exact duties and obtain a written classification."
        },
        "paid-speaking": {
          "status": "specialist",
          "route": "Activity-matched working visa with Japanese host and usually a Certificate of Eligibility",
          "detail": "A remunerated lecture, workshop or speaking tour is not covered by visa-free Temporary Visitor entry. The correct status depends on whether the engagement is academic, artistic, entertainment, research or professional service.",
          "next": "Have one lead host map every venue, fee and duty to the correct status before the tour is announced."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Temporary Visitor for rights and publisher meetings; confirmed working route for an active paid appearance",
          "detail": "Publisher meetings and rights negotiations can stay in the business lane. A reading, workshop or launch fee needs classification, while imported stock and local retail should be handled by a Japanese publisher, distributor or bookseller.",
          "next": "Separate rights, royalties, appearance fees, imported copies, giveaways and point-of-sale receipts in the host brief."
        },
        "ai-teaching": {
          "status": "specialist",
          "route": "Professor, Instructor, Engineer/Specialist in Humanities/International Services or another host-selected working status",
          "detail": "Paid university teaching, school instruction and company training do not share one status. A one-off unpaid academic contribution still needs the mission to confirm whether visitor participation is enough.",
          "next": "Ask the university, school or company to classify the institution, audience, curriculum, payment and duration."
        },
        "remote-work": {
          "status": "specialist",
          "route": "Digital Nomad visa",
          "detail": "The published route permits up to six months of remote work for an overseas organisation or overseas clients, requires annual income of at least JPY10 million and medical insurance with at least JPY10 million treatment cover, and cannot be extended.",
          "next": "Prepare income, contract and insurance evidence and keep Japanese clients, speaking fees and local employment outside this route."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Startup preparation program where available, then Business Manager",
          "detail": "A Temporary Visitor can conduct market research and negotiations but cannot operate the Japanese business. Local-government startup programs can support a preparation period before the founder qualifies for Business Manager status.",
          "next": "Choose a participating city, confirm its startup plan criteria, then map the office, capital or staffing and management role."
        },
        "trade": {
          "status": "conditional",
          "route": "Temporary Visitor for liaison, negotiation, contracting and trade-fair attendance; operating status for local delivery",
          "detail": "Sourcing, publicity, market research and negotiation can fit the visitor lane. Direct local sales, installation, service delivery or business operation require a separate commercial and immigration analysis; an ATA Carnet can support temporary professional equipment, samples and exhibition goods.",
          "next": "Use a Japanese importer or seller for local transactions and list temporary equipment separately for Customs."
        },
        "artist": {
          "status": "specialist",
          "route": "Artist or Entertainer status selected by the Japanese promoter",
          "detail": "Paid creative work and performance are outside Temporary Visitor status. Japan distinguishes artistic activity from public entertainment, so the program and venue matter.",
          "next": "Have the promoter classify rehearsals, performances, workshops, merchandise and every payment before the Certificate of Eligibility process."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Temporary Visitor for the clean attendance and negotiation segment, or one principal working status covering the actual delivery",
          "detail": "A mixed itinerary can combine tourism, meetings, speaking, teaching, sales and overseas remote work, but one visitor label does not absorb the remunerated parts.",
          "next": "Build a dated activity ledger and obtain mission advice on whether the whole trip must use the principal working status."
        }
      },
      "steps": [
        "Use visa-exempt entry only when the first trip is genuinely tourism, attendance, meetings, negotiation or market research.",
        "Ask each Japanese host to state whether any money, honorarium, expenses, sales, teaching or service delivery is involved.",
        "Get written mission classification for a one-off unpaid speaking appearance rather than assuming that no fee means no work issue.",
        "Use an activity-matched working status for paid delivery and allow time for the Certificate of Eligibility process.",
        "Use the Digital Nomad route only for qualifying overseas work and keep Japanese engagements separate."
      ],
      "cautions": [
        "Is the traveller only attending, or delivering part of the program?",
        "Are travel expenses, an honorarium, royalties or offshore payment connected to the Japanese appearance?",
        "Which working status matches the actual institution and activity?",
        "Will a Japanese seller handle books, merchandise and consumption tax?",
        "Does temporary equipment need an ATA Carnet or another Customs declaration?"
      ],
      "sources": [
        {
          "title": "Visa exemption arrangements",
          "authority": "Ministry of Foreign Affairs of Japan",
          "url": "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html",
          "checked": "21 August 2026",
          "supports": "Australian visa exemption and normal landing period"
        },
        {
          "title": "Who needs a visa for Japan",
          "authority": "Consulate-General of Japan in Melbourne",
          "url": "https://www.melbourne.au.emb-japan.go.jp/itpr_en/whoneeds.html",
          "checked": "21 August 2026",
          "supports": "short tourism, business and conference boundary"
        },
        {
          "title": "Temporary Visitor status",
          "authority": "Immigration Services Agency of Japan",
          "url": "https://www.moj.go.jp/isa/applications/status/temporaryvisitor.html",
          "checked": "21 August 2026",
          "supports": "temporary-visitor activity examples"
        },
        {
          "title": "Visas and status of residence for entering Japan",
          "authority": "Japan External Trade Organization",
          "url": "https://www.jetro.go.jp/en/invest/setting_up/section2/page5.html",
          "checked": "21 August 2026",
          "supports": "business visitor activity and remuneration boundary"
        },
        {
          "title": "Working visa categories",
          "authority": "Ministry of Foreign Affairs of Japan",
          "url": "https://www.mofa.go.jp/j_info/visit/visa/long/visa1.html",
          "checked": "21 August 2026",
          "supports": "Professor, Artist, Business Manager, Instructor and professional work categories"
        },
        {
          "title": "Digital Nomad visa",
          "authority": "Ministry of Foreign Affairs of Japan",
          "url": "https://www.mofa.go.jp/ca/fna/pagewe_000001_00046.html",
          "checked": "21 August 2026",
          "supports": "six-month stay, income, insurance and overseas-work conditions"
        },
        {
          "title": "Business Manager and startup preparation routes",
          "authority": "Japan External Trade Organization",
          "url": "https://www.jetro.go.jp/en/invest/setting_up/section2/page4.html",
          "checked": "21 August 2026",
          "supports": "founder and business operation status"
        },
        {
          "title": "Working Holiday visa for Australians",
          "authority": "Embassy of Japan in Australia",
          "url": "https://www.au.emb-japan.go.jp/itpr_en/visa_workingholiday_en.html",
          "checked": "21 August 2026",
          "supports": "18–30 age limit"
        },
        {
          "title": "Relief from Japanese income-tax withholding under tax conventions",
          "authority": "National Tax Agency Japan",
          "url": "https://www.nta.go.jp/english/taxes/withholing/tax_convention.htm",
          "checked": "21 August 2026",
          "supports": "payer and treaty review for non-resident remuneration"
        },
        {
          "title": "Temporary admission and ATA Carnet",
          "authority": "Japan Customs",
          "url": "https://www.customs.go.jp/english/summary/temporary.htm",
          "checked": "21 August 2026",
          "supports": "temporary professional equipment, samples and exhibition goods"
        },
        {
          "title": "Data Center Japan",
          "authority": "Japan Data Center Council and event organiser",
          "url": "https://f2ff.jp/event/dcjapan?lang=en",
          "checked": "21 August 2026",
          "supports": "recurring international-facing data-centre event signal"
        },
        {
          "title": "AI Infrastructure and Data Center Expo",
          "authority": "Event organiser",
          "url": "https://www.japan-it.jp/it/en-gb/exhibit/dse.html",
          "checked": "21 August 2026",
          "supports": "AI infrastructure event and English-interface signal"
        },
        {
          "title": "SusHi Tech Tokyo official report",
          "authority": "Tokyo Metropolitan Government and event organiser",
          "url": "https://www.sushitech-startup.metro.tokyo.lg.jp/en/official-report/",
          "checked": "21 August 2026",
          "supports": "international startup and innovation event signal"
        }
      ]
    },
    {
      "id": "south-korea",
      "name": "South Korea",
      "flag": "🇰🇷",
      "region": "East Asia",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "KOR-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "KOR-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "KOR-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "KOR-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "KOR-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "KOR-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "KOR-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "KOR-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "KOR-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "KOR-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "KOR-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "KOR-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "KOR-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "KOR-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "KOR-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "KOR-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "KOR-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "KOR-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "KOR-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "KOR-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "KOR-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "KOR-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "KOR-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "KOR-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "KOR-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "KOR-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KOR-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KOR-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KOR-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-free short visit; temporary K-ETA exemption through 31 December 2026",
      "ageNote": "Age 43 fits the short-visit, short-term employment, digital-nomad and investor routes; the current Workcation income test varies by age and region, so the 43-year-old band must be checked in the live table.",
      "cardSummary": "Easy short attendance, a clear C-4 route for paid lectures and training, and a newly expanded region-sensitive digital-nomad route.",
      "summary": "South Korea separates attendance from delivery sharply. Australians can make a short visa-free visit, and the temporary K-ETA exemption runs only through 31 December 2026. Paid lectures, training, consulting, media and performance under 90 days use C-4 Short-Term Employee even when the payer or employer is outside Korea. Unpaid invited speaking sits in a less certain C-3/visa-waiver boundary that the Korean mission should classify in writing.",
      "launch": {
        "fastestEntry": "Visa-free short visit, normally up to 90 days",
        "beforeDeparture": "Until 31 December 2026, use the temporary K-ETA exemption or obtain a voluntary K-ETA; without one, complete the required arrival declaration and live-check the rule for travel after that date.",
        "usefulStay": "Normally up to 90 days for a visa-free visit; C-4 supports eligible paid short-term work up to 90 days.",
        "hostUnlock": "A Korean organiser can support C-3 classification for an unpaid invited appearance or lodge the invitation, contract and corporate documents needed for C-4 paid delivery.",
        "quickPacket": [
          "Australian passport",
          "K-ETA or arrival declaration as then required",
          "Korean invitation and program",
          "Contract, payment source and duties"
        ]
      },
      "conferenceFit": {
        "label": "International and bilingual pockets",
        "detail": "Seoul and other major centres host recurring AI, open-compute, startup and research events with English websites and selected English tracks. Korean is dominant in much domestic programming, administration and networking; a bilingual host or interpreter expands reach. This signal helps preparation and does not rank the country.",
        "themes": [
          "AI",
          "open compute",
          "data centres",
          "startups",
          "research",
          "creative technology"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free short visit",
          "detail": "Australian passport holders can normally visit for up to 90 days without a visa, subject to the current entry-authorisation and arrival-declaration rules.",
          "next": "Live-check K-ETA treatment for the travel date, especially after 31 December 2026."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-free B-1/B-2 short visit for attendance and business contact",
          "detail": "Meetings, negotiation and business contact can fit a short visit when no service is delivered and no profit-making work is performed in Korea.",
          "next": "Carry the invitation and move any consulting, training or contracted delivery into C-4."
        },
        "conference": {
          "status": "low",
          "route": "Visa-free short visit for delegate attendance",
          "detail": "Passive conference attendance can use the short-visit lane; joining the program as a speaker or trainer needs separate classification.",
          "next": "Ask the organiser to state attendee, moderator, panellist, speaker and workshop duties separately."
        },
        "unpaid-speaking": {
          "status": "confirm",
          "route": "C-3 short-term visit or written confirmation that the Australian visa waiver covers the exact unpaid appearance",
          "detail": "Official Korean mission guidance places an unpaid invited lecture or speech in C-3 and a paid one in C-4. It does not conclusively show when an Australian B-1 visa waiver substitutes for C-3 for an active appearance.",
          "next": "Send the Korean mission the invitation, agenda, expenses and no-fee statement and obtain the route in writing."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "C-4 Short-Term Employee",
          "detail": "Paid lectures, training and professional services under 90 days use C-4, including work performed for a Korean organisation when the traveller remains employed or paid in Australia.",
          "next": "Allow the mission's published processing window and have the Korean host prepare its invitation, registration and contract documents."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Short-visit lane for rights meetings; C-3 confirmation for an unpaid reading or C-4 for a paid appearance",
          "detail": "Publisher meetings can remain business contact. An author talk, workshop or fee follows the speaking rule, while a Korean publisher, importer or bookseller should handle local stock and retail receipts.",
          "next": "Split rights, royalties, appearance payment, imported copies and sales before asking the host to classify the launch."
        },
        "ai-teaching": {
          "status": "specialist",
          "route": "C-4 for short paid lecture or training; E-1, E-2 or another appropriate long-stay status for continuing teaching",
          "detail": "C-4 expressly covers paid lectures and training. An ongoing university, language or institutional teaching role uses the relevant long-stay work status rather than repeated visitor trips.",
          "next": "Have the Korean institution classify subject, audience, contract, hours and duration."
        },
        "remote-work": {
          "status": "specialist",
          "route": "Digital Nomad/Workcation status",
          "detail": "The route is for qualifying overseas business owners or employees with prior experience, sufficient income and at least KRW100 million medical cover. The framework was expanded in 2026 to a maximum three-year stay and now varies the income threshold by age and Korean region; Korean local employment and profit-making activity remain outside it.",
          "next": "Use the live 2026 table to confirm Luke's age-43 threshold for the intended region and keep Korean speaking or client work on its own route."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "D-8 corporate investor, D-8-4 technology startup or D-8-4(S) Startup Korea Special Visa",
          "detail": "A visitor can explore the market, but managing or working in the Korean venture requires the relevant investment or startup status. The route depends on investment structure, innovation evidence and any government recommendation or points pathway.",
          "next": "Use Invest KOREA or a Korean startup-support body to test the company, investment and founder credentials before incorporation."
        },
        "trade": {
          "status": "conditional",
          "route": "Short visit for negotiation, purchasing and exhibition attendance; C-4 or operating status for service delivery",
          "detail": "Meetings and purchasing can stay in the visitor lane. Installation, training, consulting or other contracted service in Korea can trigger C-4 even when payment remains offshore; an ATA Carnet can cover qualifying temporary equipment and exhibition goods.",
          "next": "Separate the commercial transaction from any person-days of technical or professional delivery."
        },
        "artist": {
          "status": "specialist",
          "route": "C-4 for paid short performance or media work; E-6 or another appropriate status for longer entertainment activity",
          "detail": "The Australian Korean mission expressly includes paid music, media, sport and contracted entertainment in C-4. An unpaid cultural appearance still needs C-3/visa-waiver confirmation.",
          "next": "Have the promoter list rehearsals, performances, recording, merchandise, payment and all venues."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Short visit for attendance-only segments plus C-3/C-4 or long-stay status for active delivery",
          "detail": "Korea looks at the actual activity, not only the trip label or where payment lands. A mixed speaking, teaching, trade and performance schedule may need C-4 even if tourism and meetings are also included.",
          "next": "Give one lead Korean host a single dated schedule and have the mission classify the principal purpose."
        }
      },
      "steps": [
        "Live-check the K-ETA rule for the departure date; the published Australian exemption ends on 31 December 2026.",
        "Use the visa-free lane for tourism, meetings and delegate attendance only.",
        "Ask the Korean mission to classify a genuinely unpaid speech under C-3 or the Australian visa waiver in writing.",
        "Use C-4 for paid short speaking, training, consulting, media or performance, including offshore-paid work.",
        "For a remote-work base, confirm the 2026 Workcation income threshold for age 43 and the intended Korean region."
      ],
      "cautions": [
        "Will the trip occur after the current K-ETA exemption ends?",
        "Does an unpaid invited appearance require C-3 despite Australian visa-free access?",
        "Is any service delivered to a Korean organisation even if payment remains in Australia?",
        "Which age-and-region income tier applies to the Workcation application?",
        "Will a Korean importer, publisher or venue handle local sales and tax withholding?"
      ],
      "sources": [
        {
          "title": "Temporary K-ETA exemption extended through 2026",
          "authority": "Embassy of the Republic of Korea in Australia",
          "url": "https://overseas.mofa.go.kr/au-en/brd/m_3306/view.do?page=1&seq=760576",
          "checked": "21 August 2026",
          "supports": "Australian K-ETA exemption end date"
        },
        {
          "title": "K-ETA temporary exemption notice",
          "authority": "Korea Electronic Travel Authorization",
          "url": "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299707&locale=EN",
          "checked": "21 August 2026",
          "supports": "voluntary K-ETA and arrival-declaration distinction"
        },
        {
          "title": "Customized stay guide for foreign residents",
          "authority": "Korea Immigration Service",
          "url": "https://www.immigration.go.kr/bbs/immigration_eng/230/454085/download.do",
          "checked": "21 August 2026",
          "supports": "B-1/B-2 short visits, C-4 and long-stay activity categories"
        },
        {
          "title": "C-4 Short-Term Employee visa",
          "authority": "Embassy of the Republic of Korea in Australia",
          "url": "https://overseas.mofa.go.kr/au-en/brd/m_3306/view.do?page=1&seq=760562",
          "checked": "21 August 2026",
          "supports": "paid lecture, training, services, media and entertainment route"
        },
        {
          "title": "Short-term visit visa guidance",
          "authority": "Embassy of the Republic of Korea in Belgium",
          "url": "https://overseas.mofa.go.kr/be-en/wpge/m_7442/contents.do",
          "checked": "21 August 2026",
          "supports": "official unpaid C-3 versus paid C-4 speaking distinction"
        },
        {
          "title": "Digital Nomad visa reform notice",
          "authority": "Korea Immigration Service",
          "url": "https://www.immigration.go.kr/bbs/immigration/214/608294/artclView.do",
          "checked": "21 August 2026",
          "supports": "2026 maximum stay and age-and-region income framework"
        },
        {
          "title": "Digital Nomad Workcation visa guide",
          "authority": "Korea Immigration Service",
          "url": "https://www.immigration.go.kr/bbs/immigration_eng/229/464290/download.do",
          "checked": "21 August 2026",
          "supports": "overseas work, experience, insurance and local-work boundary; duration superseded by 2026 reform"
        },
        {
          "title": "Investor and startup visa categories",
          "authority": "Invest KOREA",
          "url": "https://www.investkorea.org/ik-en/cntnts/i-358/web.do",
          "checked": "21 August 2026",
          "supports": "D-8 corporate investor and startup pathways"
        },
        {
          "title": "Taxation of non-resident personal services",
          "authority": "National Tax Service Korea",
          "url": "https://www.nts.go.kr/english/na/ntt/selectNttInfo.do?mi=11742&nttSn=1629",
          "checked": "21 August 2026",
          "supports": "withholding and treaty review for paid delivery"
        },
        {
          "title": "ATA Carnet definition",
          "authority": "Korea Customs Service",
          "url": "https://customs.go.kr/kcs/ad/tr/trTermView.do?mi=2902&termId=286",
          "checked": "21 August 2026",
          "supports": "temporary admission of qualifying goods"
        },
        {
          "title": "AI EXPO KOREA visitor information",
          "authority": "Event organiser",
          "url": "https://aiexpo.co.kr/en/visitor-info/",
          "checked": "21 August 2026",
          "supports": "recurring AI event and English-interface signal"
        },
        {
          "title": "Seoul Meta Week",
          "authority": "Event organiser",
          "url": "https://seoulmetaweek.com/en",
          "checked": "21 August 2026",
          "supports": "international technology event and mixed-language signal"
        },
        {
          "title": "OCP Korea Tech Day",
          "authority": "Open Compute Project Foundation",
          "url": "https://www.opencompute.org/index.php/summit/2026-ocp-korea-tech-day",
          "checked": "21 August 2026",
          "supports": "open-compute and data-centre event signal"
        }
      ]
    },
    {
      "id": "malaysia",
      "name": "Malaysia",
      "flag": "🇲🇾",
      "region": "South-East Asia",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "MYS-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "MYS-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "MYS-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "MYS-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "MYS-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "MYS-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "MYS-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "MYS-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "MYS-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "MYS-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "MYS-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "MYS-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "MYS-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "MYS-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "MYS-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "MYS-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "MYS-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "MYS-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "MYS-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "MYS-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "MYS-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "MYS-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "MYS-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "MYS-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "MYS-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "MYS-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "MYS-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "MYS-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "MYS-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-free visit, normally up to 90 days, plus MDAC",
      "ageNote": "Age 43 fits the visitor, Professional Visit Pass, DE Rantau and Malaysia Tech Entrepreneur Programme routes; the Australia–Malaysia Work and Holiday route ends at age 30.",
      "cardSummary": "A straightforward 90-day front door, strong host-led speaker and trainer categories, and purpose-built remote-worker and tech-founder routes.",
      "summary": "Malaysia offers Australians a practical visa-free 90-day visit for tourism, meetings, conferences, business discussion, factory inspection, agreements and investment surveys. Active delivery is more structured: the Professional Visit Pass list expressly includes invited lecturers, seminar and course speakers, trainers, advisers, researchers, artists and volunteers. DE Rantau provides an especially relevant longer route for qualifying AI and other digital remote workers, while MTEP serves technology founders.",
      "launch": {
        "fastestEntry": "Visa-free Short Term Social Visit Pass, normally up to 90 days",
        "beforeDeparture": "Submit the free Malaysia Digital Arrival Card through the official portal within three days before arrival and carry the invitation for any business visit.",
        "usefulStay": "Normally up to 90 days on the short social visit; extensions are limited to special circumstances.",
        "hostUnlock": "A Malaysian company, university, event organiser or other eligible sponsor can apply for a Professional Visit Pass covering an invited lecturer, seminar speaker, trainer, adviser, researcher, artist or volunteer.",
        "quickPacket": [
          "Australian passport",
          "Malaysia Digital Arrival Card",
          "Onward itinerary and accommodation",
          "Invitation, role, fee and Malaysian sponsor details"
        ]
      },
      "conferenceFit": {
        "label": "English commonly used",
        "detail": "Kuala Lumpur and other Malaysian centres host recurring regional data-centre, AI, education, trade and publishing events where English is commonly used. Malay is the official language and may dominate government, community and local-market work, so bilingual hosting still matters. This is a logistics clue, not a ranking of Malaysia against other places.",
        "themes": [
          "AI",
          "data centres",
          "education",
          "trade",
          "startups",
          "publishing"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free Short Term Social Visit Pass",
          "detail": "Australian passport holders can normally enter without obtaining a visa in advance for a stay of up to 90 days.",
          "next": "Submit MDAC in the official three-day window and carry onward travel and accommodation."
        },
        "meetings": {
          "status": "low",
          "route": "Short Term Social Visit Pass",
          "detail": "The published purposes include meetings, business discussion, factory inspection, signing agreements and investment surveys.",
          "next": "Carry the host letter and keep the trip to discussion and inspection unless the sponsor activates a professional pass."
        },
        "conference": {
          "status": "low",
          "route": "Short Term Social Visit Pass for attendance",
          "detail": "Meeting and conference attendance and attending seminars are expressly listed visitor purposes.",
          "next": "If Luke joins the program, ask the organiser to assess the Professional Visit Pass speaker category."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "Host-sponsored Professional Visit Pass unless Immigration confirms the precise appearance is visitor activity",
          "detail": "The current PVP position list expressly names invited lecturer, seminar speaker, course speaker, trainer and volunteer. No fee does not automatically turn active delivery into conference attendance.",
          "next": "Have the Malaysian host lodge the correct position and state all expenses, duties and dates."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "Host-sponsored Professional Visit Pass",
          "detail": "Invited lecturers, seminar and course speakers, trainers, advisers and consultants are recognised PVP roles. Malaysian tax law treats a non-resident lecture, speech or talk as public-entertainer income subject to withholding, with treaty relief checked separately.",
          "next": "Put the fee and withholding responsibility in the contract and have the Malaysian sponsor apply before the appearance."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Social visit for publisher and rights meetings; PVP for the active author appearance",
          "detail": "A reading, workshop or promotional talk should follow the speaker classification. A Malaysian publisher, importer or bookseller should handle stock, retail receipts and local tax, while royalties are reviewed separately.",
          "next": "Split rights meetings, appearance payment, royalties, imported stock and point-of-sale activity."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "Professional Visit Pass for short invited lecture or training; Employment Pass for continuing employment",
          "detail": "The PVP list expressly includes visiting professors, invited lecturers, trainers and technical trainers. Ongoing employment with a Malaysian institution needs the longer employment route.",
          "next": "Have the institution choose the PVP role and confirm whether education-sector approvals also apply."
        },
        "remote-work": {
          "status": "specialist",
          "route": "DE Rantau Nomad Pass",
          "detail": "DE Rantau uses a Professional Visit Pass for three to 12 months, renewable for a further 12. AI and machine-learning work sits in the listed digital technology field; qualifying tech freelancers or remote workers show contracts longer than three months and annual income above USD24,000, with remote employees working for an employer outside Malaysia.",
          "next": "Prepare contracts, income and sponsor evidence and separate Malaysian speaking, employment or local client activity from the remote-work plan."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Malaysia Tech Entrepreneur Programme",
          "detail": "MTEP publishes a one-year Professional Visit Pass for a new technology entrepreneur and a residence route of up to five years for an established entrepreneur or investor, with sponsor, financial and business-plan requirements.",
          "next": "Choose new-founder or established-founder status and submit the technology venture to MDEC before operating locally."
        },
        "trade": {
          "status": "conditional",
          "route": "Short social visit for discussion, inspection, agreement and investment survey; professional or company route for delivery and operation",
          "detail": "Malaysia expressly welcomes meetings and commercial reconnaissance under the visitor pass. Active installation, consulting, sales labour or operation requires the appropriate pass and entity; an ATA Carnet can support temporary professional equipment, samples and exhibition goods.",
          "next": "Separate negotiation from delivery and appoint a Malaysian importer or seller for local transactions."
        },
        "artist": {
          "status": "specialist",
          "route": "Artist Professional Visit Pass plus host-confirmed cultural and venue approvals",
          "detail": "Immigration publishes an artist PVP route, but the Malaysian promoter must also identify any current cultural, filming, venue or agency approvals for the exact performance.",
          "next": "Have the promoter coordinate the pass, content approval, venues, rehearsals, merchandise and tax withholding."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Short social visit for clean attendance and meetings plus PVP, DE Rantau, MTEP or Employment Pass for the active purpose",
          "detail": "Malaysia has useful purpose-specific routes, but MDAC and visitor entry do not authorise speaking, teaching, performance or operation merely because those activities are brief.",
          "next": "Choose one Malaysian lead sponsor and map each day to visitor, PVP, remote-work, founder or employment activity."
        }
      },
      "steps": [
        "Use visa-free entry and MDAC for tourism, meetings, conference attendance, inspections and investment surveys.",
        "Choose one Malaysian sponsor for any programmed speaking, training, research, volunteer or artistic role.",
        "Use the published Professional Visit Pass position that matches the actual activity, even when the engagement is unpaid.",
        "Put speaker or performer withholding and treaty evidence into the contract rather than treating tax as an afterthought.",
        "Use DE Rantau for qualifying overseas digital work or MTEP for a technology-founder base."
      ],
      "cautions": [
        "Was MDAC lodged only through the official free portal in the three-day window?",
        "Is Luke attending a seminar or delivering it as an invited speaker or trainer?",
        "Does the Malaysian sponsor need another sector or cultural approval in addition to the PVP?",
        "Who withholds Malaysian tax from a paid speech, talk or performance?",
        "Will a Malaysian publisher or importer handle book stock and retail?"
      ],
      "sources": [
        {
          "title": "Visa requirement for foreigners travelling to Malaysia",
          "authority": "High Commission of Malaysia in Canberra",
          "url": "https://www.kln.gov.my/web/aus_canberra/requirement_foreigner",
          "checked": "21 August 2026",
          "supports": "Australian visa-free eligibility"
        },
        {
          "title": "Visa entitlement table updated 1 October 2025",
          "authority": "Ministry of Foreign Affairs Malaysia",
          "url": "https://www.kln.gov.my/documents/33866/10223708/1.%2BVISA%2BAPPLICATION%2B%28English%29%2B%28Updated%2Bon%2B1%2BOct.%2B2025%29.pdf/b97a0337-667f-46c5-acc7-2dbbc7bb974d",
          "checked": "21 August 2026",
          "supports": "90-day Australian visit entitlement"
        },
        {
          "title": "Short Term Social Visit Pass",
          "authority": "Immigration Department of Malaysia",
          "url": "https://www.imi.gov.my/index.php/en/main-services/pass/visitor-pass/social-visit-pass/short-term-social-visit-pass/",
          "checked": "21 August 2026",
          "supports": "meeting, conference, seminar, inspection, agreement and investment-survey purposes"
        },
        {
          "title": "Malaysia Digital Arrival Card",
          "authority": "Immigration Department of Malaysia",
          "url": "https://imigresen-online.imi.gov.my/mdac/register",
          "checked": "21 August 2026",
          "supports": "official arrival-card portal and three-day window"
        },
        {
          "title": "Professional Visit Pass",
          "authority": "Malaysia Expatriate Services Division",
          "url": "https://esd.imi.gov.my/portal/expatriates/myxpats/key-services/professional-visit-pass/",
          "checked": "21 August 2026",
          "supports": "Malaysian sponsor, temporary professional service and pass duration"
        },
        {
          "title": "Realignment of Professional Visit Pass positions",
          "authority": "Malaysia Expatriate Services Division",
          "url": "https://esd.imi.gov.my/portal/latest-news/announcement-2025/announcement-257-realignment-pvp-position/",
          "checked": "21 August 2026",
          "supports": "speaker, lecturer, trainer, adviser, researcher and volunteer positions"
        },
        {
          "title": "DE Rantau Nomad Pass",
          "authority": "Malaysia Digital Economy Corporation",
          "url": "https://www.mdec.my/md-programmes/digital-nomad-pass",
          "checked": "21 August 2026",
          "supports": "digital fields, income, contract, client and stay requirements"
        },
        {
          "title": "Malaysia Tech Entrepreneur Programme",
          "authority": "Malaysia Digital Economy Corporation",
          "url": "https://www.mdec.my/programmes/mtep",
          "checked": "21 August 2026",
          "supports": "new and established technology entrepreneur routes"
        },
        {
          "title": "Cukai Pegangan (withholding tax)",
          "authority": "Inland Revenue Board of Malaysia",
          "url": "https://www.hasil.gov.my/perundangan/cukai-pegangan/?bt_warnabg=1",
          "checked": "21 August 2026",
          "supports": "non-resident public-entertainer treatment for lectures, speeches and talks"
        },
        {
          "title": "ATA Carnet",
          "authority": "Royal Malaysian Customs Department",
          "url": "https://www.customs.gov.my/en/individu/ata-carnet",
          "checked": "21 August 2026",
          "supports": "temporary professional equipment, samples and exhibition goods"
        },
        {
          "title": "Australia–Malaysia Work and Holiday programme",
          "authority": "Immigration Department of Malaysia",
          "url": "https://www.imi.gov.my/index.php/en/main-services/special-programme/",
          "checked": "21 August 2026",
          "supports": "18–30 age limit and excluded professional activities"
        },
        {
          "title": "DCCI Malaysia",
          "authority": "Event organiser",
          "url": "https://malaysia.dccisummit.com/",
          "checked": "21 August 2026",
          "supports": "regional data-centre and cloud event signal"
        },
        {
          "title": "APAIE 2027",
          "authority": "Asia-Pacific Association for International Education",
          "url": "https://apaie.net/conferences/apaie-2027/",
          "checked": "21 August 2026",
          "supports": "international education, AI and English-language event signal"
        }
      ]
    },
    {
      "id": "indonesia",
      "name": "Indonesia",
      "flag": "🇮🇩",
      "region": "South-East Asia",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "IDN-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "IDN-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "IDN-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "IDN-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "IDN-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "IDN-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "IDN-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "IDN-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "IDN-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "IDN-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "IDN-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "IDN-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "IDN-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "IDN-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "IDN-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "IDN-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "IDN-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "IDN-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "IDN-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "IDN-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "IDN-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "IDN-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "IDN-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "IDN-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "IDN-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "IDN-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "IDN-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "IDN-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "IDN-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "B1 e-VOA/VOA for 30 days, normally extendable once",
      "ageNote": "Age 43 fits the B1 visitor, C10 speaker, C11 exhibitor, E33G remote-worker and E28 investor routes; the Australian Working Holiday category is not used as the plan.",
      "cardSummary": "A quick visitor front door and unusually explicit activity visas for compensated business-event speaking, exhibiting, performance, remote work and investment.",
      "summary": "Indonesia's current visa catalogue is unusually useful for a flexible speaking and creative mission. Eligible Australians can use B1 e-VOA or VOA for tourism, meetings and purchasing, while C10 specifically covers a speaker or presenter at a business event and permits Indonesian compensation without creating an employment relationship. C11 covers exhibition promotion, C7/C7A covers artistic performance, E33G covers qualifying work for an overseas company and E28 supports investment and company leadership. Because the official catalogue was updated on 18 August 2026, the exact live requirements should be rechecked immediately before each application.",
      "launch": {
        "fastestEntry": "B1 Visa on Arrival or e-VOA, initially 30 days",
        "beforeDeparture": "Use the official eVisa portal if applying online, check passport and onward-ticket requirements, and match the visa index to the real activity rather than relying on a tourism label.",
        "usefulStay": "B1 is initially 30 days and is normally extendable once for a further 30 days; C10 and C11 start at 60 days and can be extended within their published maximum.",
        "hostUnlock": "An Indonesian organiser can sponsor C10 for a business-event speaker or presenter, C11 for an exhibitor, or C7/C7A for an artistic or music performance.",
        "quickPacket": [
          "Australian passport with required validity",
          "Return or onward ticket",
          "Indonesian sponsor and invitation",
          "Agenda, presentation material, contract and compensation details"
        ]
      },
      "conferenceFit": {
        "label": "International and bilingual pockets",
        "detail": "Jakarta, Bali and other Indonesian centres host recurring AI, data-centre, writers, trade and creative events with international English-facing components. Bahasa Indonesia remains central for government, community, media and local commerce; a bilingual host broadens the itinerary. This is a preparation clue, not a country priority score.",
        "themes": [
          "AI",
          "data centres",
          "books",
          "trade",
          "creative industries",
          "community technology"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "B1 e-VOA or Visa on Arrival",
          "detail": "The B1 route supports tourism for eligible nationalities and starts with a 30-day stay, normally with one 30-day extension.",
          "next": "Apply only through the official eVisa system or use the authorised arrival process and confirm the extension rules then in force."
        },
        "meetings": {
          "status": "low",
          "route": "B1 visitor visa",
          "detail": "B1 includes business meetings and purchasing goods, while active work, selling and service delivery remain prohibited.",
          "next": "Carry the meeting invitation and switch to the activity-specific visa if the host adds delivery."
        },
        "conference": {
          "status": "low",
          "route": "B1 for attendance; C10 when joining the program as speaker or presenter",
          "detail": "The current catalogue makes the attendance-versus-delivery split unusually clear: a delegate can use the visitor lane, while a business-event speaker has a named C10 route.",
          "next": "Ask the organiser to identify Luke as attendee, moderator, panellist, presenter or trainer before applying."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "C10 Business Events Speaker Visitor Visa",
          "detail": "C10 is the activity-matched route for a speaker or presenter at a MICE or business event. It does not depend on taking a fee and is safer than assuming B1 covers active delivery.",
          "next": "Have the Indonesian organiser sponsor C10 with the invitation, agenda and presentation material."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "C10 Business Events Speaker Visitor Visa",
          "detail": "C10 expressly allows compensation or wages from an Indonesian individual or corporation for the speaking activity, but forbids an employment relationship. Indonesian-source remuneration also needs payer withholding and treaty review.",
          "next": "Write the engagement as a discrete event appearance, disclose compensation and keep any continuing employment or consulting outside C10."
        },
        "book-launch": {
          "status": "conditional",
          "route": "C10 for a business-event author talk; host-confirmed C7 cultural route where the launch is artistic performance",
          "detail": "A publisher meeting can remain B1 business contact, while an active talk follows C10 or the cultural classification. An Indonesian publisher, distributor or bookseller should import stock and make local sales rather than the traveller retailing under B1 or C10.",
          "next": "Have the host classify the program and separate rights, royalties, speaking compensation, imported copies and retail receipts."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "C10 for a one-off business-event presentation or workshop; sponsored work stay for actual teaching employment",
          "detail": "C10 can fit a discrete conference or business-event AI session, including compensation without employment. A recurring course, institutional teaching role or continuing consulting relationship needs the relevant work and stay status.",
          "next": "Ask the Indonesian institution whether the engagement is a MICE presentation, short professional service or employment before contracting."
        },
        "remote-work": {
          "status": "specialist",
          "route": "E33G Remote Worker limited-stay visa",
          "detail": "E33G is designed for living in Indonesia while performing duties for a company outside Indonesia. Current requirements include an overseas employment contract and published financial evidence, including annual income of at least USD60,000; it is not a route to Indonesian clients, local sales or Indonesian wages.",
          "next": "Recheck the live E33G evidence list after the August 2026 catalogue update and keep speaking, teaching and founder work on separate permissions."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "C12 pre-investment visit for feasibility, then an E28 investor category and compliant foreign-investment company",
          "detail": "C12 supports pre-investment research. E28B can support investing, establishing and managing a company as director or commissioner, while sectoral foreign-ownership and capital rules sit separately under the investment authority.",
          "next": "Use an Indonesian investment adviser or BKPM channel to confirm sector, ownership, capital, entity and the founder's actual operating duties."
        },
        "trade": {
          "status": "conditional",
          "route": "B1 for meetings and purchasing; C11 for promoting goods or services as an exhibitor",
          "detail": "C11 creates a dedicated exhibition lane but does not turn the traveller into a general Indonesian seller or service provider. An ATA Carnet can support temporary professional equipment and exhibition goods that will be re-exported.",
          "next": "Use an Indonesian importer or seller for contracts and receipts and declare temporary equipment through Customs."
        },
        "artist": {
          "status": "specialist",
          "route": "C7 cultural-performance category or C7A Music Performance visa",
          "detail": "Indonesia publishes dedicated performance routes with Indonesian sponsorship, organiser or impresario documents and contracts. The exact C7 subcategory follows the art form and program.",
          "next": "Have the Indonesian promoter choose the subcategory and include rehearsals, performances, filming, merchandise and compensation."
        },
        "mixed-mission": {
          "status": "conditional",
          "route": "Choose the principal activity-specific visa and separate B1 attendance from C10, C11, C7, E33G or E28 activity",
          "detail": "Indonesia's indexed catalogue supports a modular itinerary, but each visa has negative conditions. Speaker compensation under C10, for example, does not authorise employment, retail or unrelated consulting.",
          "next": "Build a dated activity ledger and ask one Indonesian lead host to map every day to the current visa index."
        }
      },
      "steps": [
        "Use B1 for tourism, business meetings and purchasing only, not for active delivery or selling.",
        "Use C10 for an invited business-event speech or presentation, whether unpaid or compensated.",
        "Use C11 for exhibition promotion and C7/C7A for the relevant artistic performance.",
        "Use E33G only for qualifying overseas-company duties and E28/company approvals for investment and management.",
        "Recheck every index on the official visa catalogue because it was freshly updated on 18 August 2026."
      ],
      "cautions": [
        "Does the live B1 page still show the same eligibility, stay and extension conditions?",
        "Is the appearance a C10 business-event presentation, a C7 cultural performance or actual employment?",
        "Does compensation remain a discrete C10 event fee without an Indonesian employment relationship?",
        "Who imports and sells books or merchandise and who withholds Indonesian tax?",
        "Have the E33G evidence thresholds and E28 investor conditions changed since the catalogue update?"
      ],
      "sources": [
        {
          "title": "Official Indonesian eVisa portal",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://evisa.imigrasi.go.id/",
          "checked": "21 August 2026",
          "supports": "official application channel and visa-index access"
        },
        {
          "title": "Indonesian visa catalogue",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://kanwilsultra.imigrasi.go.id/wna/daftar-visa-indonesia",
          "checked": "21 August 2026",
          "supports": "current B1, C7, C10, C11, C12, E28 and E33G categories; page updated 18 August 2026"
        },
        {
          "title": "B1 Visa on Arrival",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://kanwilpapuabarat.imigrasi.go.id/service-proxy/8?url=https%3A%2F%2Fwww.imigrasi.go.id%2Fwna%2Fdaftar-visa-indonesia%2FB1",
          "checked": "21 August 2026",
          "supports": "tourism, business meeting, purchasing, stay and prohibited-work boundary"
        },
        {
          "title": "C10 Business Events Speaker Visitor Visa",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://kanwilpapuabarat.imigrasi.go.id/service-proxy/8?url=https%3A%2F%2Fwww.imigrasi.go.id%2Fwna%2Fdaftar-visa-indonesia%2FC10",
          "checked": "21 August 2026",
          "supports": "speaker activity, sponsorship, compensation and no-employment boundary"
        },
        {
          "title": "C11 Exhibitor Visitor Visa",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://kanwilpapuabarat.imigrasi.go.id/service-proxy/8?url=https%3A%2F%2Fwww.imigrasi.go.id%2Fwna%2Fdaftar-visa-indonesia%2FC11",
          "checked": "21 August 2026",
          "supports": "exhibitor promotion, stay and sales boundary"
        },
        {
          "title": "C7A Music Performance Visa",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://kanwilpapuabarat.imigrasi.go.id/service-proxy/8?url=https%3A%2F%2Fwww.imigrasi.go.id%2Fwna%2Fdaftar-visa-indonesia%2FC7A",
          "checked": "21 August 2026",
          "supports": "music performance, sponsor and contract route"
        },
        {
          "title": "E33G Remote Worker visa",
          "authority": "Directorate General of Immigration Indonesia",
          "url": "https://www.imigrasi.go.id/wna/daftar-visa-indonesia/E33G",
          "checked": "21 August 2026",
          "supports": "overseas-company duties and current remote-worker evidence"
        },
        {
          "title": "Indonesian visa information by index",
          "authority": "Bontang Immigration Office",
          "url": "https://bontang.imigrasi.go.id/public/layanan-publik/kategori/wna/sub/informasi-visa-republik-indonesia",
          "checked": "21 August 2026",
          "supports": "C10 compensation, E28B investment and E33G activity descriptions"
        },
        {
          "title": "Investment procedures",
          "authority": "Indonesia Investment Promotion Centre Sydney / Ministry of Investment",
          "url": "https://sydney.bkpm.go.id/invesment-procedures",
          "checked": "21 August 2026",
          "supports": "foreign investment company, ownership and capital layer"
        },
        {
          "title": "Income Tax Article 26 for foreign taxpayers",
          "authority": "Directorate General of Taxes Indonesia",
          "url": "https://pajak.go.id/en/income-tax-article-26-income-tax-foreign-taxpayers",
          "checked": "21 August 2026",
          "supports": "Indonesian-source service and activity withholding and treaty relief"
        },
        {
          "title": "Income Tax Article 21 withholding",
          "authority": "Directorate General of Taxes Indonesia",
          "url": "https://www.pajak.go.id/en/withholding-article-21-tax",
          "checked": "21 August 2026",
          "supports": "speaker, trainer, author, artist and musician activity categories"
        },
        {
          "title": "ATA Carnet facility",
          "authority": "Directorate General of Customs and Excise Indonesia",
          "url": "https://www.beacukai.go.id/faq-fasilitas-ata-carnet",
          "checked": "21 August 2026",
          "supports": "temporary professional equipment, exhibitions, meetings and cultural goods"
        },
        {
          "title": "Indonesia Digital Leap and DTI Series",
          "authority": "Coordinating Ministry for Economic Affairs Indonesia",
          "url": "https://ekon.go.id/publikasi/detail/6942/kemenko-perekonomian-gelar-forum-nasional-indonesia-digital-leap-akselerasi-ekosistem-data-center-ai-keamanan-siber-untuk-pertumbuhan-ekonomi-8",
          "checked": "21 August 2026",
          "supports": "government-backed AI, data-centre and cyber event signal"
        },
        {
          "title": "Indonesia International Data Center and Cloud",
          "authority": "Event organiser",
          "url": "https://iidcc-summit.com/",
          "checked": "21 August 2026",
          "supports": "recurring data-centre event signal"
        },
        {
          "title": "Ubud Writers and Readers Festival 2026",
          "authority": "Festival organiser",
          "url": "https://www.ubudwritersfestival.com/programs/ubud-writers-and-readers-festival-2026",
          "checked": "21 August 2026",
          "supports": "bilingual literary, author and book-launch event signal"
        }
      ]
    },
    {
      "id": "united-arab-emirates",
      "name": "United Arab Emirates",
      "flag": "🇦🇪",
      "region": "Middle East",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "UAE-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "UAE-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "UAE-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "UAE-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "UAE-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "UAE-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "UAE-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "UAE-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "UAE-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "UAE-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "UAE-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "UAE-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "UAE-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "UAE-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "UAE-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "UAE-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "UAE-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "UAE-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "UAE-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "UAE-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "UAE-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "UAE-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "UAE-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "UAE-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "UAE-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "UAE-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "UAE-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "UAE-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "UAE-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Free 30-day visa on arrival; active work needs its own route",
      "ageNote": "Age 43 fits the reviewed visitor, Mission Work Permit, Virtual Work, Green Residence and Golden Residence routes. The Mission Work Permit requires the worker to be at least 18; no upper age ceiling was stated on the reviewed pages.",
      "cardSummary": "A quick visitor front door, host-led short-project permit, purpose-built remote-work residence and separate media, tax and licence layers.",
      "summary": "An Australian ordinary-passport holder is eligible for a free 30-day visa on arrival. That is the fast lane for tourism, scouting, meetings and attendance, not a blanket permission to deliver services. A UAE establishment can recruit a visitor for a short project through the three-month Mission Work Permit, renewable once. Overseas remote employees have a dedicated Virtual Work Residence route, while Green and Golden Residence routes can support qualifying freelancers, founders, investors and exceptional talent. Public talks, launches, performances and imported books can also engage emirate-level event, education and federal media approvals, so the local host should classify the whole program before promotion.",
      "launch": {
        "fastestEntry": "Free 30-day visa on arrival for an Australian ordinary passport",
        "beforeDeparture": "Carry a passport valid for at least six months, onward and accommodation evidence, and a written invitation that separates attendance, meetings, delivery, sales and media activity. Have the host choose any work, event, education or media route before travel.",
        "usefulStay": "The visitor visa is 30 days. A Mission Work Permit is issued for three months and can be renewed once for a similar period; longer remote or founder plans belong under a residence route.",
        "hostUnlock": "A licensed UAE establishment applies for the Mission Work Permit and supplies the official job offer. A regulated profession, including formal teaching, can need the relevant professional licence as well.",
        "quickPacket": [
          "Australian passport valid at least six months",
          "Onward travel and accommodation",
          "Invitation with emirate, venue, duties and dates",
          "Fee, expenses and tax terms",
          "Host trade licence and work-route confirmation",
          "Media, publication or education approval where relevant"
        ]
      },
      "conferenceFit": {
        "label": "Regular international signal · Arabic and English",
        "detail": "Arabic is the official language, while English is common in international business and technology settings. GITEX Global is a current example of a large multilingual AI, data-centre and trade gathering; Sharjah International Book Fair is a separate literary signal. These are planning signals only, not speaking access or a reason to rank the country above any other.",
        "themes": [
          "AI",
          "data centres",
          "technology",
          "trade",
          "investment",
          "publishing",
          "creative industries"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Free 30-day visa on arrival",
          "detail": "The UAE Embassy in Canberra states that eligible Australian passport holders receive the visitor visa at the airport or another entry point.",
          "next": "Travel with six months' passport validity, onward travel and accommodation evidence, then check the authorised last day on arrival."
        },
        "meetings": {
          "status": "low",
          "route": "30-day visitor entry for discussion and market scouting",
          "detail": "Use the visitor stay for partner, publisher, university, venue, supplier and investor meetings without delivering the contracted service.",
          "next": "Keep the invitation meeting-only; if a workshop, installation or advisory session is added, have the host reclassify it before delivery."
        },
        "conference": {
          "status": "low",
          "route": "Visitor entry for delegate attendance",
          "detail": "Attendance and networking can use the visitor lane. Exhibiting, demonstrating, selling, speaking or staffing a stand can add work, customs, event and media questions.",
          "next": "Ask the organiser to state delegate versus active exhibitor or program role and list any equipment or stock entering the UAE."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "Host classification; Mission Work Permit where the appearance is treated as short project work",
          "detail": "No fee does not by itself make a keynote, panel, reading or facilitated session tourism. Media regulation can apply to media activities whether paid or unpaid, and emirate event permissions can also matter.",
          "next": "Have the host obtain written classification from its labour, venue and media channels before advertising the appearance."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "Mission Work Permit through a licensed UAE establishment",
          "detail": "The permit is designed for short-term project employment, runs for three months and can be renewed once. The UAE payer must also classify tax, invoicing and any emirate-level event approval.",
          "next": "Contract through the UAE host, obtain the official job offer and permit before delivery, and have the payer confirm corporate-tax and withholding treatment in writing."
        },
        "book-launch": {
          "status": "specialist",
          "route": "Mission Work Permit or other work route plus publisher, venue and media approvals",
          "detail": "Rights meetings can stay in the visitor lane. A public talk, signing, paid promotion or sale is active delivery. Publications imported for circulation require a UAE Media Council permit, and local publisher or bookseller handling is the cleanest first model.",
          "next": "Split rights meetings, author appearance, book import, retail and online promotion, then assign each part to a UAE publisher, bookseller, venue or licensed agency."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "Mission Work Permit plus education approval where the role is regulated",
          "detail": "A short company or conference workshop can fit the project permit. MOHRE lists teachers among professions for which a competent-authority licence can be required; university, school and public training contexts should be classified by the host.",
          "next": "Get a host letter specifying guest lecture, public workshop, staff training or formal teaching, and obtain any education-authority approval before travel."
        },
        "remote-work": {
          "status": "low",
          "route": "Virtual Work Residence for employment outside the UAE",
          "detail": "The ICP service requires proof of remote employment outside the UAE, a passport valid for six months and a salary certificate showing at least USD 3,500 or equivalent. It is a purpose-built route rather than a visitor-work assumption.",
          "next": "Apply through ICP with the overseas employment and salary evidence; keep UAE clients and local delivery outside this lane."
        },
        "entrepreneur": {
          "status": "conditional",
          "route": "Licensed business plus Green or Golden Residence where eligible",
          "detail": "Green Residence is a renewable five-year sponsor-free route for qualifying investors, partners and self-employed people. Freelancers need a permit, qualification and at least AED 360,000 annual freelance income in each of the previous two years. Golden Residence has separate entrepreneur, investor and exceptional-talent evidence.",
          "next": "Choose emirate and mainland or free-zone activity first, obtain the exact licence, then test Green or Golden Residence rather than assuming company ownership gives work rights."
        },
        "trade": {
          "status": "conditional",
          "route": "Visitor meetings; Mission Work Permit and licensed entity for delivery",
          "detail": "Negotiations, sourcing and partner discovery can stay in the meeting lane. Demonstration, installation, local retail, fulfilment or service delivery can become work and licensed trade. Temporary equipment and sale stock need customs planning.",
          "next": "Use a UAE importer, distributor or event contractor for the first active trade trip and itemise samples, professional gear and goods for sale."
        },
        "artist": {
          "status": "specialist",
          "route": "Mission Work Permit plus promoter, venue and media approvals",
          "detail": "Music, film, visual art, literary and cultural appearances need host-led work classification whether paid or unpaid. Golden Residence may support qualifying accredited creative talent for a longer base, but it is not an instant event permit.",
          "next": "Have the promoter confirm the work permit, venue or event approval, content review, tax and merchandise arrangements before public announcement."
        },
        "mixed-mission": {
          "status": "specialist",
          "route": "Visitor entry plus Mission Work Permit or residence and activity-specific approvals",
          "detail": "A single trip can combine meetings, speaking, AI training, books, art and remote work, but the visitor visa does not absorb every activity. Each emirate and free zone can add a different licensing layer.",
          "next": "Build one activity ledger by emirate, venue, host, payer, audience, stock and media use; obtain a written route decision for every active line."
        }
      },
      "steps": [
        "Use the free 30-day visitor entry only for tourism, scouting, meetings and clearly passive attendance.",
        "List every talk, workshop, signing, performance, sale, demonstration and remote-work day before booking.",
        "Have a licensed UAE host choose the Mission Work Permit or relevant residence route and identify emirate-specific approvals.",
        "Obtain the official job offer, professional licence and event, education or media approval before active delivery.",
        "Use a local publisher, bookseller, importer, distributor or promoter for stock, receipts and local permissions where practical.",
        "Have the payer document corporate-tax, invoice and benefit treatment, including travel and accommodation.",
        "Carry permits and host contacts and keep the delivered program within the approved activity and emirate."
      ],
      "cautions": [
        "Is the 30-day visitor entry being mistaken for work permission?",
        "Is an unpaid appearance still media, professional or project work under the host's classification?",
        "Which emirate, free zone, education authority, venue and media authority controls the activity?",
        "Are imported books, merchandise, exhibition stock or professional equipment cleared for circulation or temporary admission?",
        "Does online promotional content require a UAE Media Council advertiser permit or an approved agency?",
        "Will the natural-person corporate-tax threshold or a licensed UAE business apply to repeated UAE-source activity?",
        "Is a Green or Golden Residence criterion being confused with the separate licences needed to operate the activity?"
      ],
      "sources": [
        {
          "title": "UAE Embassy in Canberra FAQs",
          "authority": "United Arab Emirates Ministry of Foreign Affairs",
          "url": "https://www.mofa.gov.ae/en/Missions/Canberra/Contact-Us/FAQS",
          "checked": "21 August 2026",
          "supports": "Australian free 30-day visa on arrival"
        },
        {
          "title": "Visa exemptions for non-citizens",
          "authority": "United Arab Emirates Ministry of Foreign Affairs",
          "url": "https://www.mofa.gov.ae/en/visa-exemptions-for-non-citizen",
          "checked": "21 August 2026",
          "supports": "Australian ordinary-passport entry status"
        },
        {
          "title": "Mission Work Permit",
          "authority": "UAE Ministry of Human Resources and Emiratisation",
          "url": "https://www.mohre.gov.ae/en/services/mission-work-permit-2022",
          "checked": "21 August 2026",
          "supports": "host application, short-project purpose, age floor, documents, professional licences, three-month duration and one renewal"
        },
        {
          "title": "Virtual Work Residence Visa",
          "authority": "Federal Authority for Identity, Citizenship, Customs and Port Security",
          "url": "https://icp.gov.ae/en/services-details/?serviceid=68e73fd45ae59b00117389f4",
          "checked": "21 August 2026",
          "supports": "overseas remote employment, six-month passport and USD 3,500 salary evidence"
        },
        {
          "title": "Green Residence",
          "authority": "Federal Authority for Identity, Citizenship, Customs and Port Security",
          "url": "https://icp.gov.ae/en/uae-green-residency/",
          "checked": "21 August 2026",
          "supports": "five-year sponsor-free residence and skilled, freelance, self-employed, investor and partner criteria"
        },
        {
          "title": "Golden Residency Guide",
          "authority": "Federal Authority for Identity, Citizenship, Customs and Port Security",
          "url": "https://icp.gov.ae/en/services/uae-golden-residency/",
          "checked": "21 August 2026",
          "supports": "five- and ten-year residence and entrepreneur, investor, creative and specialist categories"
        },
        {
          "title": "Natural persons and corporate tax",
          "authority": "UAE Federal Tax Authority",
          "url": "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx",
          "checked": "21 August 2026",
          "supports": "natural-person business threshold and excluded wage, personal-investment and real-estate income"
        },
        {
          "title": "Foreign direct investment in the UAE",
          "authority": "Official Portal of the UAE Government",
          "url": "https://u.ae/en/information-and-services/finance-and-investment/foreign-direct-investment",
          "checked": "21 August 2026",
          "supports": "business ownership, licensing context and Arabic-English commercial reality"
        },
        {
          "title": "Media legislation",
          "authority": "UAE Media Council",
          "url": "https://uaemc.gov.ae/en/media-legislation/",
          "checked": "21 August 2026",
          "supports": "federal media-regulation layer"
        },
        {
          "title": "Permit for publications to enter for circulation",
          "authority": "UAE Media Council",
          "url": "https://uaemc.gov.ae/en/media-services/permit-for-publications-to-enter-the-country-for-the-purpose-of-circulation/",
          "checked": "21 August 2026",
          "supports": "publication-import permit for circulation"
        },
        {
          "title": "GITEX Global 2026",
          "authority": "GITEX Global",
          "url": "https://www.gitex.com/",
          "checked": "21 August 2026",
          "supports": "current multilingual AI, compute, data-centre, investment and trade event signal; no speaking access inferred"
        },
        {
          "title": "Sharjah International Book Fair 2026",
          "authority": "Sharjah Book Authority",
          "url": "https://sibf.com/ar/visit",
          "checked": "21 August 2026",
          "supports": "current publishing and literary event signal; no speaking access inferred"
        }
      ]
    },
    {
      "id": "saudi-arabia",
      "name": "Saudi Arabia",
      "flag": "🇸🇦",
      "region": "Middle East",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "SAU-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "SAU-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "SAU-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "SAU-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "SAU-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "SAU-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "SAU-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "SAU-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "SAU-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "SAU-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "SAU-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "SAU-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "SAU-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "SAU-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "SAU-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "SAU-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "SAU-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "SAU-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "SAU-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "SAU-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "SAU-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "SAU-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "SAU-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "SAU-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "SAU-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "SAU-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "SAU-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "SAU-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "SAU-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Tourist eVisa is fast for tourism; business and work are host-led",
      "ageNote": "Age 43 clears the tourist eVisa's minimum age of 18 and was not an upper-age blocker on the reviewed business, temporary-work, investment-registration or Entrepreneur Residency material.",
      "cardSummary": "A straightforward tourist eVisa sits beside distinct Saudi-hosted business, event and temporary-work routes for an active program.",
      "summary": "Australians can obtain the official tourist eVisa, normally valid for one year with multiple entries and a maximum stay of three months. Its terms limit it to tourism or Umrah and prohibit paid employment, so it is not the shortcut for a speaking or teaching tour. A Saudi entity can request a commercial or event visit for meetings and participation, while contracted delivery belongs under the temporary-work system or another work route. The updated temporary-work framework allows a 90-day period with a possible additional 90 days and requires a signed contract and medical insurance. Publishing, live performance, public events, imports, tax and investment registration remain separate Saudi layers.",
      "launch": {
        "fastestEntry": "Official tourist eVisa for tourism, scouting and personal travel",
        "beforeDeparture": "Use a passport valid for at least six months. If the trip includes meetings, forum participation, speaking, training, performance or delivery, have the Saudi host obtain the matching invitation and visa classification before the traveller applies.",
        "usefulStay": "The tourist eVisa is generally valid for one year, multiple entry, with a maximum stay of three months and no extension. A temporary work visa is 90 days with a possible additional 90 days under the updated rules.",
        "hostUnlock": "A Saudi company or institution requests the commercial, event or temporary-work route, supplies the invitation and contract, and coordinates event, media, venue and professional approvals.",
        "quickPacket": [
          "Australian passport valid at least six months",
          "Correct Saudi visa and host invitation",
          "Signed activity or temporary-work contract",
          "Medical insurance for temporary work",
          "Venue, event and content approvals",
          "Fee, expenses and withholding-tax terms"
        ]
      },
      "conferenceFit": {
        "label": "Visible international signal · Arabic-led and bilingual",
        "detail": "Arabic is the official language; major international policy and technology gatherings commonly provide substantial English access. The UNESCO Global Forum on the Ethics of AI in Riyadh, 14–17 September 2026, is a current verified signal. Delegate registration is not a speaker invitation, and the previously public proposal window is closed.",
        "themes": [
          "AI ethics",
          "AI governance",
          "technology",
          "data",
          "investment",
          "public policy",
          "culture"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Official Saudi tourist eVisa",
          "detail": "Australia is on the eligible-country list. The eVisa is normally one-year multiple entry with a maximum stay of three months and is not extendable.",
          "next": "Apply on the official Visit Saudi portal, carry the issued eVisa and respect its tourism-only purpose."
        },
        "meetings": {
          "status": "conditional",
          "route": "Saudi-hosted commercial visit visa",
          "detail": "A Saudi entity requests the commercial visit and documents the purpose. Ordinary business-visit activity does not authorise employment or contracted delivery.",
          "next": "Have the Saudi company issue the invitation and keep the schedule to negotiations, partner meetings and site visits."
        },
        "conference": {
          "status": "conditional",
          "route": "Event visit or commercial visit arranged for attendance and participation",
          "detail": "Saudi Arabia's visa platform includes an event-visit request for attendance or participation. The organiser must still confirm access and visa support; registration is not permission to speak or work.",
          "next": "Ask the organiser which event or commercial invitation it will issue and whether delegate accreditation is restricted."
        },
        "unpaid-speaking": {
          "status": "specialist",
          "route": "Host-selected event or temporary-work route",
          "detail": "The tourist eVisa is not a work visa. A public appearance can also engage event licensing and content review even without a fee, so the host should not rely on payment as the boundary.",
          "next": "Obtain the host's written visa and General Entertainment Authority or venue classification before accepting or announcing the talk."
        },
        "paid-speaking": {
          "status": "specialist",
          "route": "Temporary work visa and host contract",
          "detail": "The temporary-work framework supports time-limited contracted work, requires a signed contract and medical insurance, and allows 90 days with a possible further 90 days. A resident payer must apply Saudi withholding tax to qualifying payments to a non-resident at the applicable rate.",
          "next": "Have the Saudi contracting entity arrange the temporary-work visa, confirm the exact tax category and put fees, flights, hotels and other benefits in the contract."
        },
        "book-launch": {
          "status": "specialist",
          "route": "Host-led work or event route plus licensed Saudi publisher, bookseller and publication review",
          "detail": "Rights and publisher meetings can use the commercial-visit lane. A reading, launch, promotion or sale is active activity; written publications and imports sit under Saudi publishing rules and local distribution controls.",
          "next": "Use a Saudi publisher or bookseller to clear the title, handle imports and sales, and coordinate the author appearance and venue approval."
        },
        "ai-teaching": {
          "status": "specialist",
          "route": "Temporary work visa or continuing employment route through the Saudi host",
          "detail": "A guest workshop, institutional training or paid lecture is contracted delivery, not tourist activity. The host must also identify any education, professional or event approval for the actual venue and audience.",
          "next": "Have the university, company or public body specify the teaching format, contract, duration and regulator, then sponsor the correct work route."
        },
        "remote-work": {
          "status": "not-fit",
          "route": "No dedicated Saudi digital-nomad route identified",
          "detail": "The reviewed tourist eVisa expressly says it is not a work visa. No official visitor permission for routine foreign remote work was identified in this review.",
          "next": "Do not use the tourist eVisa as a remote-work permission. Obtain a Saudi residence or work route, or written official advice for the exact facts."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "MISA investment registration and company licensing, with Entrepreneur Residency where eligible",
          "detail": "A foreign investor must register with the Ministry of Investment before investment activity, then obtain commercial registration and sector licences. The Premium Residency entrepreneur product has separate investment-round, ownership and approved-entity evidence; its higher tier links permanent status to substantial investment and Saudi job creation.",
          "next": "Use the first visit for meetings, obtain incubator or investment support, then map MISA registration, commercial registration, activity licences and Entrepreneur Residency as separate gates."
        },
        "trade": {
          "status": "conditional",
          "route": "Commercial visit for negotiations; registered and licensed operation for local delivery",
          "detail": "Supplier meetings, negotiations and market exploration can use a Saudi-hosted commercial visit. Installation, demonstrations, local selling and contracted services can require temporary work and a licensed Saudi counterparty. ATA Carnet pre-approval is available for eligible temporary goods.",
          "next": "Appoint a Saudi importer, distributor or event contractor and pre-clear professional equipment or exhibition goods through ZATCA."
        },
        "artist": {
          "status": "specialist",
          "route": "Temporary work visa plus promoter and entertainment licences",
          "detail": "Live performance and entertainment events require the Saudi promoter to use the General Entertainment Authority licensing framework. Artist, support staff, venue, program and content details can all matter.",
          "next": "Contract through a licensed promoter that confirms temporary-work visas, performance and event licences, content approval, withholding tax and merchandise."
        },
        "mixed-mission": {
          "status": "specialist",
          "route": "Commercial or event visit for passive components plus temporary work and sector approvals for delivery",
          "detail": "Meetings, a UNESCO forum, private training, a public keynote, book activity and performance can require different permissions on one itinerary. The tourist eVisa cannot be stretched across the active lines.",
          "next": "Give one Saudi host or local coordinator a line-by-line activity, payer, venue and content matrix and obtain the invitation, visa and licence for each component."
        }
      },
      "steps": [
        "Use the tourist eVisa only for tourism, scouting and personal travel within its stated conditions.",
        "Ask each Saudi organiser to classify attendance, participation, speaking, training, sales or performance before travel.",
        "Obtain the commercial or event invitation for meetings and attendance, or the temporary-work contract and visa for delivery.",
        "For temporary work, confirm the signed contract, medical insurance and authorised 90-day period before commencing.",
        "Add GEA, venue, publication, education and professional approvals to the host checklist where the activity triggers them.",
        "Have the payer determine Saudi withholding tax and document all cash and non-cash benefits.",
        "Pre-clear equipment and stock with ZATCA and a Saudi importer, including ATA Carnet use where eligible."
      ],
      "cautions": [
        "Is the tourist eVisa being used for an activity that Saudi Arabia treats as work or professional delivery?",
        "Has the Saudi entity issued the invitation, or is there only a conference registration receipt?",
        "Is unpaid participation being assumed to be outside event and work regulation?",
        "Does the contract match the authorised host, role, location and temporary-work period?",
        "Has the promoter obtained the required entertainment, venue and content licences before publicity?",
        "Are books, equipment, merchandise or exhibition goods approved for import or temporary admission?",
        "Has the Saudi payer classified and budgeted withholding tax on the non-resident payment?",
        "Does the founder plan include MISA registration, commercial registration and sector licensing rather than residence alone?"
      ],
      "sources": [
        {
          "title": "Saudi eVisa terms and conditions",
          "authority": "Saudi Ministry of Tourism",
          "url": "https://visa.visitsaudi.com/Home/TermsConditions",
          "checked": "21 August 2026",
          "supports": "Australian eligibility, six-month passport, one-year multiple entry, three-month maximum stay and tourism-only work restriction"
        },
        {
          "title": "Request for a commercial visit visa",
          "authority": "Saudi Ministry of Foreign Affairs",
          "url": "https://visa.mofa.gov.sa/CommercialVisitVisa/Index",
          "checked": "21 August 2026",
          "supports": "Saudi-entity commercial invitation process"
        },
        {
          "title": "Saudi visa services platform",
          "authority": "Saudi Ministry of Foreign Affairs",
          "url": "https://visa.mofa.gov.sa/Home/Index2?service_type=1",
          "checked": "21 August 2026",
          "supports": "event-visit requests for attendance or participation and host-led invitation categories"
        },
        {
          "title": "Updated temporary-work visa regulation",
          "authority": "Saudi Ministry of Human Resources and Social Development",
          "url": "https://www.hrsd.gov.sa/media-center/news/011020241",
          "checked": "21 August 2026",
          "supports": "contract, medical insurance, updated governance and additional 90-day extension"
        },
        {
          "title": "Entrepreneur Residency",
          "authority": "Saudi Premium Residency Center",
          "url": "https://pr.gov.sa/product-details-entrepreneur-residency",
          "checked": "21 August 2026",
          "supports": "entrepreneur residence tiers, investment, ownership and Saudi employment criteria"
        },
        {
          "title": "Updated Investment Law",
          "authority": "Saudi Ministry of Investment",
          "url": "https://misa.gov.sa/activities/laws-regulations-copy/",
          "checked": "21 August 2026",
          "supports": "foreign-investor registration before investment, commercial registration and further licence sequence"
        },
        {
          "title": "Investor Guide 2026",
          "authority": "Saudi Ministry of Investment",
          "url": "https://misa.gov.sa/app/uploads/2026/07/Investor-Guide_13-02_compressed_compressed.pdf",
          "checked": "21 August 2026",
          "supports": "entrepreneurial-establishment registration and approved incubator or university support"
        },
        {
          "title": "Submit Withholding Tax Return",
          "authority": "Zakat, Tax and Customs Authority",
          "url": "https://www.zatca.gov.sa/en/eServices/Pages/eservices-043.aspx",
          "checked": "21 August 2026",
          "supports": "resident-payer withholding obligation for payments to non-residents"
        },
        {
          "title": "Temporary admission using ATA Carnet",
          "authority": "Zakat, Tax and Customs Authority",
          "url": "https://www.zatca.gov.sa/en/eServices/Pages/eservices-294.aspx",
          "checked": "21 August 2026",
          "supports": "pre-approval and temporary entry of eligible professional or exhibition goods"
        },
        {
          "title": "Entertainment activity and support licences",
          "authority": "Saudi General Entertainment Authority",
          "url": "https://www.gea.gov.sa/list-of-licenses/",
          "checked": "21 August 2026",
          "supports": "event, live-performance and entertainment licensing layer"
        },
        {
          "title": "Implementing Regulation of the Law of Printed Materials and Publication",
          "authority": "Saudi Ministry of Media",
          "url": "https://s3.media.gov.sa/new-mom-portal-prod/s3fs-public/2024-08/%D8%A7%D9%84%D9%84%D8%A7%D9%8A%D9%94%D8%AD%D8%A9%20%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A%D8%A9%20%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D8%B7%D8%A8%D9%88%D8%B9%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%86%D8%B4%D8%B1_0.pdf",
          "checked": "21 August 2026",
          "supports": "Arabic primary regulation for written-publication and import controls"
        },
        {
          "title": "Global Forum on the Ethics of AI",
          "authority": "UNESCO",
          "url": "https://www.unesco.org/en/forum-ethics-ai",
          "checked": "21 August 2026",
          "supports": "Riyadh forum dates, purpose and themes; no speaking access inferred"
        },
        {
          "title": "Global Forum delegate site",
          "authority": "UNESCO, SDAIA and ICAIRE",
          "url": "https://gfeai.icaire.org/en",
          "checked": "21 August 2026",
          "supports": "delegate registration and program signal; registration is not a speaker call"
        }
      ]
    },
    {
      "id": "qatar",
      "name": "Qatar",
      "flag": "🇶🇦",
      "region": "Middle East",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "QAT-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "QAT-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "QAT-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "QAT-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "QAT-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "QAT-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "QAT-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "QAT-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "QAT-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "QAT-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "QAT-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "QAT-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "QAT-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "QAT-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "QAT-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "QAT-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "QAT-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "QAT-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "QAT-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "QAT-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "QAT-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "QAT-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "QAT-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "QAT-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "QAT-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "QAT-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "QAT-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "QAT-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "QAT-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Visa-free visitor entry; short contractual work needs a host-arranged business visa",
      "ageNote": "Age 43 is not an upper-age blocker in the reviewed visitor, short-term business, work-residence or Entrepreneur Residency material. The Entrepreneur Residency requires an applicant to be at least 18.",
      "cardSummary": "Easy visitor access, an explicit three-month short-contract route and a new self-sponsored entrepreneur residence, with no general digital-nomad lane.",
      "summary": "Qatar's current official visitor checker confirms visa-free entry for an Australian passport holder, while the border record and live checker should be used for the exact authorised period and conditions. Qatar's government portal separately describes a 72-hour business visa for very short trips and a host-arranged business visa of up to three months for short-term contractual work. Continuing local employment normally requires a Qatari employer and Work Residence Permit. A new Entrepreneur Residency provides a self-sponsored five-year route for locally endorsed founders, followed by a special work permit. Paid services can attract a 5% final withholding tax where performed wholly or partly in Qatar for a non-resident without a permanent establishment.",
      "launch": {
        "fastestEntry": "Visa-free visitor entry for an Australian passport holder",
        "beforeDeparture": "Run Australia through the live Visit Qatar checker, meet its passport, onward-travel, accommodation and insurance conditions, and obtain a Qatari host letter. For any contracted delivery, have the approved company or institution arrange the business visa in advance.",
        "usefulStay": "Use the period recorded at entry rather than a copied online number. The separate short-term contractual-work business visa can be valid for up to three months; a 72-hour business visa can be extended once for another 72 hours.",
        "hostUnlock": "An approved Qatari company or institution arranges the short-term business visa. A longer employer hires through a Work Residence Permit; an endorsed founder completes Entrepreneur Residency and then applies for the special work permit.",
        "quickPacket": [
          "Australian passport and visa-free-entry evidence",
          "Return or onward ticket and accommodation",
          "Qatari invitation and approved-host details",
          "Contract separating attendance from delivery",
          "Fee, expenses and 5% withholding treatment",
          "Customs list for equipment, books or stock"
        ]
      },
      "conferenceFit": {
        "label": "Recurring international signal · Arabic and English",
        "detail": "Arabic is official and English is widely used across Doha's international business, education and policy settings. ITU PP-26 in Doha, 9–27 November 2026, is a current digital-governance signal, but participation is tied to ITU invitations, credentials and delegations rather than an open public speaker call.",
        "themes": [
          "digital governance",
          "telecommunications",
          "AI",
          "technology",
          "startups",
          "education",
          "investment"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Visa-free visitor entry",
          "detail": "The current Visit Qatar checker returns visa-free entry for Australia. Passport, accommodation, onward-travel and any health-insurance conditions still apply, and the authorised stay is controlled at entry.",
          "next": "Use the live checker immediately before booking and retain the arrival record showing the last authorised day."
        },
        "meetings": {
          "status": "low",
          "route": "Visa-free visitor entry or 72-hour business visa",
          "detail": "Partner, investor, publisher, supplier and site meetings can remain short business visits. Qatar also publishes a 72-hour business visa, extendable once for 72 hours, for properly documented short trips.",
          "next": "Carry the invitation and keep discussion separate from performing the contract."
        },
        "conference": {
          "status": "low",
          "route": "Visitor or short business entry for attendance",
          "detail": "Delegate attendance and networking are distinct from speaking, exhibiting work or contracted delivery. Restricted intergovernmental events such as ITU PP-26 require credentials in addition to immigration permission.",
          "next": "Have the organiser confirm delegate eligibility, invitation and credential path; reclassify any stage, workshop or booth role."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "Host-arranged business visa where the appearance is active short-term work",
          "detail": "Qatar's published short-contract route is broad enough to be the safer lane for an active talk or workshop. Absence of a fee does not establish that a visitor entry is sufficient.",
          "next": "Ask the Qatari organiser to obtain Ministry of Interior or labour classification and arrange the business visa before travel where required."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "Business visa for short-term contractual work",
          "detail": "An approved Qatari company or institution arranges the visa in advance for up to three months. The payer generally withholds 5% of gross services wholly or partly performed in Qatar when the non-resident has no permanent establishment.",
          "next": "Contract through the approved host and put the visa, fee, benefits, invoice and 5% withholding responsibility in writing."
        },
        "book-launch": {
          "status": "specialist",
          "route": "Visitor lane for rights meetings; short-contract business visa and local publisher for active launch",
          "detail": "Publisher and rights discussions can stay meeting-only. A paid or programmed author appearance, local promotion and sales should be separated and handled with a Qatari publisher or bookseller, including import and content checks.",
          "next": "Split the rights meeting, reading, signing, imported stock and retail receipts, then have the local publisher clear each part."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "Short-contract business visa or Work Residence Permit",
          "detail": "A short guest workshop or contracted training can use the up-to-three-month business visa arranged by an approved institution. Continuing employment belongs under the employer-led residence and work system.",
          "next": "Have the university, company or research centre state the curriculum, audience, dates, payment and whether the role is a short contract or employment."
        },
        "remote-work": {
          "status": "not-fit",
          "route": "No dedicated Qatar digital-nomad route identified",
          "detail": "The reviewed official visitor and residence pages do not publish a general route for living in Qatar while routinely working online for foreign employers or clients.",
          "next": "Do not infer remote-work permission from visa-free entry. Obtain a residence and work route, or written Ministry of Interior and labour advice for the exact arrangement."
        },
        "entrepreneur": {
          "status": "conditional",
          "route": "Self-sponsored Entrepreneur Residency plus special work permit and business licensing",
          "detail": "The official program targets early-stage and scaling entrepreneurs endorsed by a recognised Qatar incubator. An overseas applicant needs to be 18+, hold a passport valid six months, show an attested three-month bank statement with at least USD 10,000, provide an attested police clearance and obtain incubator endorsement. The published residence is five years, self-sponsored and renewable; operating still proceeds through QID, licensing and a special work permit.",
          "next": "Win incubator endorsement first, prepare attested funds and police documents, then complete the residence, QID, company and special-work-permit sequence."
        },
        "trade": {
          "status": "conditional",
          "route": "Visitor or 72-hour business entry for negotiations; short-contract or licensed entity for delivery",
          "detail": "Sourcing, negotiation and investment exploration can be short business activity. Installation, demonstrations, paid services and local sales need the appropriate contractual-work or operating route. Qatar Customs permits temporary admission with suspension of duties and accepts ATA Carnet processes for eligible goods.",
          "next": "Appoint a Qatari importer, distributor or customs agent and classify every sample, professional device and item for sale before arrival."
        },
        "artist": {
          "status": "specialist",
          "route": "Host-arranged short-contract or work route plus venue and cultural approvals",
          "detail": "A performer, filmmaker, author or artist should not rely on visa-free entry for active delivery. The Qatari promoter must coordinate immigration, venue, content, equipment, tax and merchandise permissions.",
          "next": "Use a local promoter that provides the approved contract, visa classification and written venue and authority clearances."
        },
        "mixed-mission": {
          "status": "specialist",
          "route": "Visa-free attendance plus business visa, residence or sector approval for active lines",
          "detail": "A Doha trip can combine ITU-related meetings, AI workshops, founder work, book activity and performance, but the passive and active pieces do not share one automatic permission.",
          "next": "Create a daily matrix of attendance, meetings, delivery, payer, venue, stock and online work, and have the Qatari host clear every active line."
        }
      },
      "steps": [
        "Run the Australian passport through the official live visitor checker and record the current entry conditions.",
        "Separate meetings and attendance from every speaking, teaching, performance, demonstration and sale.",
        "Have an approved Qatari company or institution arrange the short-term business visa before any contracted delivery.",
        "Use the employer-led Work Residence Permit for continuing local employment.",
        "For Entrepreneur Residency, obtain incubator endorsement and prepare attested funds, police and identity documents before application.",
        "Have the Qatari payer confirm 5% withholding, invoicing and any permanent-establishment issue.",
        "Use a local customs agent, publisher or promoter for equipment, books, merchandise and venue approvals."
      ],
      "cautions": [
        "Has the live visa checker and arrival record been used instead of relying on a stale duration?",
        "Is the traveller merely attending, or undertaking short-term contractual work?",
        "Is the Qatari inviter an approved company or institution able to arrange the business visa?",
        "Does ITU or another controlled event require credentials beyond ordinary registration and immigration permission?",
        "Has the payer applied the 5% services withholding rule to cash and non-cash consideration where relevant?",
        "Is an Entrepreneur Residence being confused with the separate QID, company licence and special work permit?",
        "Are imported books, equipment and merchandise cleared through a Qatari counterparty?",
        "Is routine remote work being assumed from visitor status without an official published route?"
      ],
      "sources": [
        {
          "title": "Visa-free entry or Hayya e-visa checker",
          "authority": "Qatar Tourism",
          "url": "https://visitqatar.com/intl-en/plan-your-trip/visas",
          "checked": "21 August 2026",
          "supports": "current Australian visa-free result and live passport, accommodation, onward and insurance conditions"
        },
        {
          "title": "Visas",
          "authority": "Qatar e-Government Portal Hukoomi",
          "url": "https://portal.www.gov.qa/wps/wcm/connect/Hukoomi%2BWeb%2BContent/Hukoomi/Topics/Visas%2Band%2BOfficial%2BDocuments/visas",
          "checked": "21 August 2026",
          "supports": "Australian arrival arrangement, 72-hour business visa and up-to-three-month short-contract business visa"
        },
        {
          "title": "Residence and Work Permits",
          "authority": "Qatar e-Government Portal Hukoomi",
          "url": "https://portal.www.gov.qa/wps/wcm/connect/hukoomi%2Bweb%2Bcontent/hukoomi/topics/visas%2Band%2Bofficial%2Bdocuments/residenceandworkpermits",
          "checked": "21 August 2026",
          "supports": "Qatari-employer sponsorship, temporary entry conversion and Work Residence Permit"
        },
        {
          "title": "Residency Program for Entrepreneurs and Executives",
          "authority": "Invest Qatar",
          "url": "https://www.invest.qa/en/residency-program",
          "checked": "21 August 2026",
          "supports": "entrepreneur endorsement, age, funds, documents, overseas application journey and special work permit"
        },
        {
          "title": "Entrepreneur and Executive Residency FAQs",
          "authority": "Invest Qatar",
          "url": "https://www.invest.qa/docs/FAQs-Residency-Programs.pdf",
          "checked": "21 August 2026",
          "supports": "self-sponsored five-year Entrepreneur Residency and renewal framework"
        },
        {
          "title": "Qatar launches entrepreneur and executive residency visas",
          "authority": "Invest Qatar",
          "url": "https://www.invest.qa/en/media-centre/news-and-articles/qatar-launches-two-new-residency-visas-to-empower-global-executives-and-entrepreneurs",
          "checked": "21 August 2026",
          "supports": "2026 launch, five-year self-sponsored residence and structured work-permit pathway"
        },
        {
          "title": "Taxes in Qatar",
          "authority": "Qatar General Tax Authority",
          "url": "https://gta.gov.qa/en/taxes-info",
          "checked": "21 August 2026",
          "supports": "5% final withholding on qualifying services to a non-resident without a permanent establishment"
        },
        {
          "title": "Pending customs duties and temporary admission",
          "authority": "General Authority of Customs Qatar",
          "url": "https://www.customs.gov.qa/English/Procedures/UnifiedGuide/Pages/PendingCustomsDuties.aspx",
          "checked": "21 August 2026",
          "supports": "temporary admission, guarantees and ATA Carnet customs layer"
        },
        {
          "title": "ITU Plenipotentiary Conference 2026",
          "authority": "International Telecommunication Union",
          "url": "https://pp.itu.int/2026/en/",
          "checked": "21 August 2026",
          "supports": "Doha dates, digital-governance purpose and controlled participation; no speaking access inferred"
        },
        {
          "title": "Qatar to host ITU PP-26",
          "authority": "International Telecommunication Union",
          "url": "https://www.itu.int/en/mediacentre/Pages/PR-2025-11-13-PP26-announcement.aspx",
          "checked": "21 August 2026",
          "supports": "official host and member-delegation event signal"
        }
      ]
    },
    {
      "id": "kenya",
      "name": "Kenya",
      "flag": "🇰🇪",
      "region": "Africa",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "KEN-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "KEN-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "KEN-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "KEN-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "KEN-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "KEN-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "KEN-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "KEN-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "KEN-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "KEN-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "KEN-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "KEN-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "KEN-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "KEN-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "KEN-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "KEN-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "KEN-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "KEN-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "KEN-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "KEN-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "KEN-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "KEN-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "KEN-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "KEN-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "KEN-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "KEN-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "KEN-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "KEN-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "KEN-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "Approved eTA before travel; Special Pass for temporary professional delivery",
      "ageNote": "Age 43 creates no upper-age issue in the reviewed eTA, Special Pass, Class N Digital Nomad or Class G business-permit criteria. No income floor beyond evidence of recent monthly income was published on the current Class N page.",
      "cardSummary": "A quick eTA for visiting, a six-month Special Pass for short professional activity and a one- or two-year Digital Nomad Permit.",
      "summary": "An Australian passport holder needs an approved Kenyan Electronic Travel Authorisation before starting the journey. The eTA is valid for travel within 90 days of issue, but the border officer sets the actual stay. It can include conference or business invitation documents; it is not permission to work. Temporary business, trade or professional activity can use a Special Pass for up to six months, normally through the Kenyan organisation, at USD 200 per month for a non-East African. Kenya also has a Class N Digital Nomad Permit for one or two renewable years and a Class G route for locally operated trade, business or consultancy. Non-resident speaking, professional and training fees commonly attract 20% final withholding tax.",
      "launch": {
        "fastestEntry": "Approved Kenyan eTA obtained before starting the journey",
        "beforeDeparture": "Apply only through the official eTA service, normally at least three working days ahead. Carry a passport valid six months, itinerary, accommodation and any conference or business invitation and company registration documents.",
        "usefulStay": "The eTA must be used for travel within 90 days of issue; the authorised stay is decided at the border. A Special Pass can cover up to six months. Class N is issued for one or two years and is renewable.",
        "hostUnlock": "A Kenyan organisation supplies the stamped Special Pass application, detailed cover letter, registration certificate and any regulatory clearance for speaking, teaching, consulting, performance or other temporary professional activity.",
        "quickPacket": [
          "Australian passport valid at least six months",
          "Approved eTA PDF",
          "Itinerary and accommodation",
          "Kenyan invitation and organisation registration",
          "CV and certified qualifications for Special Pass",
          "Fee, expenses and 20% withholding terms"
        ]
      },
      "conferenceFit": {
        "label": "Regular regional and global signal · English and Kiswahili",
        "detail": "Kiswahili is the national language and Kiswahili and English are official; both matter, alongside Kenya's many community languages. Nairobi regularly hosts African and global digital-policy, technology, research and development gatherings. IGF 2026, 14–18 December, is a verified signal, but its session and booth calls are closed and attendance does not create a speaking slot.",
        "themes": [
          "internet governance",
          "AI",
          "technology",
          "development",
          "climate",
          "research",
          "entrepreneurship",
          "community"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Kenya eTA before travel",
          "detail": "The official eTA is required for an Australian visitor. Standard fees begin at USD 30, processing is generally three business days and the border officer decides the stay.",
          "next": "Apply through etakenya.go.ke, download the approval PDF and carry the itinerary, accommodation and return travel."
        },
        "meetings": {
          "status": "low",
          "route": "Business-purpose eTA for meetings and exploration",
          "detail": "The eTA process accepts a Kenyan company invitation and its registration certificate. Use this lane for discussion, networking, due diligence and site visits without delivering a profession or service.",
          "next": "Describe the trip accurately as business meetings and move any added consulting, workshop or demonstration to a Special Pass."
        },
        "conference": {
          "status": "low",
          "route": "Conference-purpose eTA for attendance",
          "detail": "The eTA service can request a conference invitation or participation letter. Delegate or participant entry does not replace a Special Pass for professional delivery.",
          "next": "Obtain the organiser letter and state whether the traveller is only attending or is also presenting, facilitating, exhibiting or working."
        },
        "unpaid-speaking": {
          "status": "conditional",
          "route": "Special Pass where the talk is temporary professional activity",
          "detail": "The Special Pass expressly covers temporarily conducting a profession. Kenya's eFNS service warns that business or employment without the required permit or pass is an offence; absence of a fee does not settle classification.",
          "next": "Have the Kenyan host seek immigration classification and obtain the Special Pass before the talk where required."
        },
        "paid-speaking": {
          "status": "conditional",
          "route": "Special Pass plus non-resident withholding",
          "detail": "The host-backed Special Pass can cover temporary professional delivery for up to six months and costs a non-East African USD 200 per month after approval. KRA lists non-resident professional, training and appearance or performance fees at 20% final withholding.",
          "next": "Have the host obtain and pay for the pass before work begins and remit withholding within five working days of payment."
        },
        "book-launch": {
          "status": "conditional",
          "route": "Business eTA for rights meetings; Special Pass and local publisher for active launch",
          "detail": "Rights and publisher meetings can stay in the business-visitor lane. A programmed reading, promotional service, fee, imported stock or local sale should be handled separately through the host, publisher, customs and tax channels.",
          "next": "Use a Kenyan publisher or bookseller for import, stock and receipts and have it sponsor any Special Pass needed for the author appearance."
        },
        "ai-teaching": {
          "status": "conditional",
          "route": "Special Pass for short professional training; employment permit for continuing work",
          "detail": "A short AI workshop, guest lecture or staff training can be temporary professional activity under a Special Pass, with qualifications and any regulator clearance. A continuing job needs the relevant work permit rather than repeated visitor entries.",
          "next": "Have the institution state whether the session is a guest event, contracted training, research or employment and sponsor the matching pass or permit."
        },
        "remote-work": {
          "status": "low",
          "route": "Class N Digital Nomad Permit",
          "detail": "Class N covers a foreign employer, work for a foreign company or self-employed services to clients outside Kenya. It is issued for one or two years and is renewable. The current page requires three months of bank statements or payslips, accommodation, an employer or company letter and a no-objection letter from the Australian mission; it does not publish a fixed income threshold. Fees are USD 200 processing and USD 1,000 issuance per year.",
          "next": "Build the Class N pack and keep Kenyan employers and clients outside the remote-work lane unless another permit authorises them."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Class G permit for specific trade, business or consultancy",
          "detail": "Class G requires licences or registrations, proof the activity benefits Kenya, company and tax documents, and at least USD 100,000 capital available for investment. Immigration and business registration remain distinct.",
          "next": "Use the first eTA visit for exploration, then incorporate, secure sector licences, evidence capital and apply for Class G before operating."
        },
        "trade": {
          "status": "conditional",
          "route": "Business eTA for negotiations; Special Pass or Class G for active trade",
          "detail": "Supplier and distributor meetings can fit the business eTA. Temporary professional trade activity can use the Special Pass; a continuing local trade or consultancy belongs under Class G. Imports, samples and sales also need Kenya Revenue Authority and customs planning.",
          "next": "Appoint a Kenyan importer or distributor and classify meetings, demonstration, installation, local sale and continuing operation separately."
        },
        "artist": {
          "status": "conditional",
          "route": "Special Pass plus promoter, venue and tax arrangements",
          "detail": "A temporary artistic or performance engagement can be professional activity requiring the pass. KRA lists non-resident appearance and performance fees at 20% final withholding; venue, filming, content and merchandise permissions remain separate.",
          "next": "Use a Kenyan promoter to sponsor the pass and document venue approval, tax, equipment and merchandise before public announcement."
        },
        "mixed-mission": {
          "status": "specialist",
          "route": "eTA for passive visitor activity plus Special Pass, Class N or Class G for active components",
          "detail": "A trip may combine IGF attendance, local meetings, community AI training, remote work, a book event and a performance. Each line has a different trigger, even when one host coordinates the itinerary.",
          "next": "Make one activity ledger by date, county, host, payer, audience and customer location, then attach eTA, Special Pass, Class N or Class G to each line."
        }
      },
      "steps": [
        "Apply through the official Kenya eTA service and wait for approval before starting the journey.",
        "Attach the correct conference or business invitation and the Kenyan organisation's registration where requested.",
        "Separate attendance and meetings from every talk, workshop, performance, consulting session and sale.",
        "For temporary professional activity, have the Kenyan organisation file the Special Pass pack and obtain the actual pass before work starts.",
        "Use Class N for a sustained foreign-remote-work base and Class G for locally operated business or consultancy.",
        "Have the payer withhold and remit the applicable non-resident tax and provide the withholding certificate.",
        "Add county, venue, professional, publisher and customs checks to the national immigration route where needed."
      ],
      "cautions": [
        "Is the eTA approval being mistaken for a work permit or a guaranteed length of stay?",
        "Has the traveller received the Special Pass itself, not only an approval notification or payment request?",
        "Does an unpaid session still amount to temporarily conducting a profession?",
        "Has the host budgeted USD 200 per Special Pass month for a non-East African?",
        "Will KRA treat the fee as professional, training, contractual or appearance or performance income at 20% final withholding?",
        "Does Class N activity remain wholly for employers, companies or clients outside Kenya?",
        "Can the Class G applicant show USD 100,000 capital and all sector, company and tax documents?",
        "Has English-only planning overlooked Kiswahili, local languages and the relevant community's protocol?"
      ],
      "sources": [
        {
          "title": "How to apply for a Kenya eTA",
          "authority": "Kenya Directorate of Immigration Services",
          "url": "https://etakenya.go.ke/form/apply/how-to-apply?type=tourist",
          "checked": "21 August 2026",
          "supports": "pre-travel approval, 90-day use window, border-set stay, documents, conference and business invitations and three-day processing"
        },
        {
          "title": "Kenya eTA frequently asked questions",
          "authority": "Kenya Directorate of Immigration Services",
          "url": "https://etakenya.go.ke/faqs",
          "checked": "21 August 2026",
          "supports": "official application channel, approval-before-travel rule, processing and fees"
        },
        {
          "title": "Special Pass",
          "authority": "Kenya Directorate of Immigration Services",
          "url": "https://immigration.go.ke/kenya-special-pass/",
          "checked": "21 August 2026",
          "supports": "up-to-six-month temporary business, trade or professional activity, host documents and USD 200 monthly fee"
        },
        {
          "title": "Special Pass information pack",
          "authority": "Kenya Foreign Nationals Services",
          "url": "https://fns.immigration.go.ke/infopack/passes/specialpass/",
          "checked": "21 August 2026",
          "supports": "online process, permit-before-work warning and approval-notification boundary"
        },
        {
          "title": "Class N Digital Nomad Permit",
          "authority": "Kenya Foreign Nationals Services",
          "url": "https://fns.immigration.go.ke/infopack/permits/classN/",
          "checked": "21 August 2026",
          "supports": "foreign remote-work scope, one- or two-year duration, evidence and current fees"
        },
        {
          "title": "Class G trade, business or consultancy permit",
          "authority": "Kenya Foreign Nationals Services",
          "url": "https://fns.immigration.go.ke/infopack/permits/classG/",
          "checked": "21 August 2026",
          "supports": "business scope, benefit test, licences, company and tax documents and USD 100,000 capital"
        },
        {
          "title": "Everything about Withholding Tax",
          "authority": "Kenya Revenue Authority",
          "url": "https://www.kra.go.ke/helping-tax-payers/faqs/everything-about-withholding-tax",
          "checked": "21 August 2026",
          "supports": "20% non-resident professional, training and appearance or performance rates, final-tax treatment and five-working-day remittance"
        },
        {
          "title": "Constitution of Kenya, Article 7",
          "authority": "Kenya Law",
          "url": "https://new.kenyalaw.org/akn/ke/act/2010/constitution/eng%402010-09-03",
          "checked": "21 August 2026",
          "supports": "Kiswahili national language, Kiswahili and English official languages and protection of language diversity"
        },
        {
          "title": "IGF 2026",
          "authority": "United Nations Internet Governance Forum",
          "url": "https://intgovforum.org/en/dashboard/igf-2026",
          "checked": "21 August 2026",
          "supports": "Nairobi dates, themes and participation signal; no open speaker opportunity inferred"
        },
        {
          "title": "Africa Tech Summit Nairobi",
          "authority": "Africa Tech Summit",
          "url": "https://www.africatechsummit.com/",
          "checked": "21 August 2026",
          "supports": "recurring Nairobi technology, investment and startup event signal; no speaking access inferred"
        }
      ]
    },
    {
      "id": "palau",
      "name": "Palau",
      "flag": "🇵🇼",
      "region": "Oceania",
      "reviewed": "21 August 2026",
      "claimChecks": {
        "entrySnapshot": {
          "id": "PLW-ENTRY-SNAPSHOT",
          "checked": "21 August 2026"
        },
        "ageNote": {
          "id": "PLW-AGE-NOTE",
          "checked": "21 August 2026"
        },
        "cardSummary": {
          "id": "PLW-CARD-SUMMARY",
          "checked": "21 August 2026"
        },
        "summary": {
          "id": "PLW-SUMMARY",
          "checked": "21 August 2026"
        },
        "launch": {
          "fastestEntry": {
            "id": "PLW-LAUNCH-FASTEST-ENTRY",
            "checked": "21 August 2026"
          },
          "beforeDeparture": {
            "id": "PLW-LAUNCH-BEFORE-DEPARTURE",
            "checked": "21 August 2026"
          },
          "usefulStay": {
            "id": "PLW-LAUNCH-USEFUL-STAY",
            "checked": "21 August 2026"
          },
          "hostUnlock": {
            "id": "PLW-LAUNCH-HOST-UNLOCK",
            "checked": "21 August 2026"
          },
          "quickPacket": {
            "id": "PLW-LAUNCH-QUICK-PACKET",
            "checked": "21 August 2026"
          }
        },
        "conferenceFit": {
          "label": {
            "id": "PLW-CONFERENCE-LABEL",
            "checked": "21 August 2026"
          },
          "detail": {
            "id": "PLW-CONFERENCE-DETAIL",
            "checked": "21 August 2026"
          },
          "themes": {
            "id": "PLW-CONFERENCE-THEMES",
            "checked": "21 August 2026"
          }
        },
        "steps": {
          "id": "PLW-ROUTE-BUILDER",
          "checked": "21 August 2026"
        },
        "cautions": {
          "id": "PLW-ROUTE-EDGES",
          "checked": "21 August 2026"
        },
        "pathways": {
          "tourism": {
            "status": {
              "id": "PLW-PATH-TOURISM-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-TOURISM-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-TOURISM-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-TOURISM-NEXT",
              "checked": "21 August 2026"
            }
          },
          "meetings": {
            "status": {
              "id": "PLW-PATH-MEETINGS-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-MEETINGS-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-MEETINGS-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-MEETINGS-NEXT",
              "checked": "21 August 2026"
            }
          },
          "conference": {
            "status": {
              "id": "PLW-PATH-CONFERENCE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-CONFERENCE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-CONFERENCE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-CONFERENCE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "unpaid-speaking": {
            "status": {
              "id": "PLW-PATH-UNPAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-UNPAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-UNPAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-UNPAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "paid-speaking": {
            "status": {
              "id": "PLW-PATH-PAID-SPEAKING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-PAID-SPEAKING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-PAID-SPEAKING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-PAID-SPEAKING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "book-launch": {
            "status": {
              "id": "PLW-PATH-BOOK-LAUNCH-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-BOOK-LAUNCH-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-BOOK-LAUNCH-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-BOOK-LAUNCH-NEXT",
              "checked": "21 August 2026"
            }
          },
          "ai-teaching": {
            "status": {
              "id": "PLW-PATH-AI-TEACHING-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-AI-TEACHING-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-AI-TEACHING-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-AI-TEACHING-NEXT",
              "checked": "21 August 2026"
            }
          },
          "remote-work": {
            "status": {
              "id": "PLW-PATH-REMOTE-WORK-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-REMOTE-WORK-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-REMOTE-WORK-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-REMOTE-WORK-NEXT",
              "checked": "21 August 2026"
            }
          },
          "entrepreneur": {
            "status": {
              "id": "PLW-PATH-ENTREPRENEUR-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-ENTREPRENEUR-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-ENTREPRENEUR-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-ENTREPRENEUR-NEXT",
              "checked": "21 August 2026"
            }
          },
          "trade": {
            "status": {
              "id": "PLW-PATH-TRADE-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-TRADE-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-TRADE-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-TRADE-NEXT",
              "checked": "21 August 2026"
            }
          },
          "artist": {
            "status": {
              "id": "PLW-PATH-ARTIST-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-ARTIST-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-ARTIST-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-ARTIST-NEXT",
              "checked": "21 August 2026"
            }
          },
          "mixed-mission": {
            "status": {
              "id": "PLW-PATH-MIXED-MISSION-STATUS",
              "checked": "21 August 2026"
            },
            "route": {
              "id": "PLW-PATH-MIXED-MISSION-ROUTE",
              "checked": "21 August 2026"
            },
            "detail": {
              "id": "PLW-PATH-MIXED-MISSION-DETAIL",
              "checked": "21 August 2026"
            },
            "next": {
              "id": "PLW-PATH-MIXED-MISSION-NEXT",
              "checked": "21 August 2026"
            }
          }
        }
      },
      "entrySnapshot": "30-day visa on arrival for tourism or business visits; labour permit for work",
      "ageNote": "Age 43 is not an upper-age blocker in the reviewed visitor, Digital Resident extension, labour-permit or foreign-investment material. The route questions are purpose, local sponsor and business structure rather than age.",
      "cardSummary": "Simple 30-day visitor entry for tourism, meetings and conferences, with early local confirmation needed before any active or commercial delivery.",
      "summary": "Palau issues a 30-day tourist or business visa on arrival to an eligible Australian traveller, with up to two further 30-day extensions applied for at least seven days before expiry. The Palau Entry Form must be submitted no more than 72 hours before departure, the passport needs six months' validity, and onward travel, funds and the Palau Pledge are part of entry. Visitor and business visas cover tourism, meetings, conferences, negotiations and opportunity exploration, but expressly prohibit employment and commercial operation; a labour permit is required to work. Palau's small administration does not publish a neat short-speaker exemption, so speaking, training, performance and paid delivery should be cleared directly by the local host with Immigration and the Bureau of Labour before travel.",
      "launch": {
        "fastestEntry": "Thirty-day tourist or business visa on arrival",
        "beforeDeparture": "Submit the Palau Entry Form at most 72 hours before departure and retain its QR code. Carry a passport valid six months, onward ticket, funds, accommodation and a precise invitation for any business or conference purpose.",
        "usefulStay": "The visitor or business visa is 30 days and can be extended twice for another 30 days each. Apply at least seven days before expiry; the published renewal fee is USD 50 each time.",
        "hostUnlock": "A Palauan organisation should contact Immigration and the Bureau of Labour and Human Resources to obtain written classification and any labour permit before speaking, teaching, consulting, performing or operating a business.",
        "quickPacket": [
          "Australian passport valid at least six months",
          "Palau Entry Form QR code",
          "Onward ticket, accommodation and funds",
          "Invitation with duties, locations and dates",
          "Written Immigration and labour classification",
          "Fee, tax, equipment and merchandise plan"
        ]
      },
      "conferenceFit": {
        "label": "Occasional regional signal · Palauan and English",
        "detail": "English and Palauan are both practical, and local and state protocols matter in a small island society. The 55th Pacific Islands Forum Leaders Meeting is officially confirmed for Palau in early September 2026, creating a regional diplomacy, climate, ocean and resilience signal. It is a controlled leaders' process, not an open speaking circuit.",
        "themes": [
          "Pacific regionalism",
          "climate",
          "ocean",
          "resilience",
          "digital sovereignty",
          "culture",
          "education"
        ]
      },
      "pathways": {
        "tourism": {
          "status": "low",
          "route": "Thirty-day tourist visa on arrival",
          "detail": "The visa is for tourism, leisure and social visits, not work. It can be extended twice for 30 days. The USD 100 Pristine Paradise Environmental Fee is normally included in the international air ticket.",
          "next": "Submit the entry form within the 72-hour window, carry onward travel and funds, and sign the Palau Pledge on arrival."
        },
        "meetings": {
          "status": "low",
          "route": "Thirty-day business visa on arrival",
          "detail": "The official immigration page lists business meetings, conferences, contract negotiation and opportunity exploration. It does not permit employment or commercial operation.",
          "next": "Carry an invitation and keep the visit to discussion, negotiation and exploration unless a labour permit is approved."
        },
        "conference": {
          "status": "low",
          "route": "Tourist or business visa for attendance",
          "detail": "Palau includes meeting and conference attendance in short visitor purposes. A diplomatic or leaders' meeting can impose separate accreditation and security requirements.",
          "next": "Confirm organiser accreditation and whether the role is passive attendance or active program delivery."
        },
        "unpaid-speaking": {
          "status": "confirm",
          "route": "Direct Immigration and Bureau of Labour classification before travel",
          "detail": "Palau publishes no general visitor exemption for an unpaid keynote, reading, workshop or panel. Its visitor pages prohibit employment and commercial activity and require a labour permit for work, so no-fee status should not be treated as decisive.",
          "next": "Have the Palauan host send the complete role, expense support and schedule to Immigration and Labour and retain the written answer or permit."
        },
        "paid-speaking": {
          "status": "specialist",
          "route": "Labour permit and locally compliant contract",
          "detail": "Paid speaking, consulting or facilitation is outside the visitor lane. The host must resolve the labour permit, business licence and tax treatment before delivery. Palau's tax legislation can apply 10% non-resident tax to a technical fee, while a continuing business presence can move into business-profits rules.",
          "next": "Contract only after the host obtains the labour permit and written Bureau of Revenue and Taxation classification for the fee."
        },
        "book-launch": {
          "status": "specialist",
          "route": "Labour classification plus local publisher or bookseller and customs plan",
          "detail": "Publisher meetings can remain business visits. A reading, promotion, signing service, imported stock or local sale can become work or commercial activity and should be handled by a Palauan counterparty.",
          "next": "Use a local bookseller, library, school or cultural host to clear the appearance, imports, sales and community protocol."
        },
        "ai-teaching": {
          "status": "specialist",
          "route": "Host-backed labour permit or written exemption",
          "detail": "A community, college, government or organisational AI workshop is active teaching or professional delivery. No published short-teacher visitor exception was found.",
          "next": "Have Palau Community College, government, school, NGO or other host seek Immigration and Labour clearance before fixing dates."
        },
        "remote-work": {
          "status": "not-fit",
          "route": "No published physical digital-nomad work permission",
          "detail": "Digital Residents can seek two consecutive 90-day tourist-visa extensions after the initial visa, but the official page does not convert that tourist stay into permission to work. Palau digital residency should not be confused with physical work rights.",
          "next": "Do not use a Digital Resident ID as work permission; obtain written Immigration and Labour advice or a labour and residence route for the actual activity."
        },
        "entrepreneur": {
          "status": "specialist",
          "route": "Foreign Investment Approval Certificate, entity, business licence, tax registration and labour permit",
          "detail": "A non-citizen investor should establish the company structure, apply to the Foreign Investment Board for an FIAC and then complete business, tax and work permissions. The Foreign Investment Act gives the Board up to 90 days after a complete application and applies community-benefit, citizen-participation and compliance considerations.",
          "next": "Use the first visit for discovery, then complete the FIAC checklist, company charter, business licence, PGST and labour sequence before operation."
        },
        "trade": {
          "status": "conditional",
          "route": "Business visa for negotiation; FIAC, licence and labour permission for operations",
          "detail": "Contract negotiation and opportunity exploration fit the business visit. Importing for sale, local retail, installation or service delivery becomes commercial activity and needs a Palauan entity or licensed local partner, customs and work permission.",
          "next": "Appoint a Palauan importer or distributor and separate samples, temporary professional equipment, stock for sale and after-sales service."
        },
        "artist": {
          "status": "specialist",
          "route": "Labour permit or written exemption plus Palauan cultural and venue approval",
          "detail": "Performance, filming, exhibition and cultural collaboration should be cleared with the local host, state and traditional leadership where relevant. A small-community invitation does not automatically waive labour, tax or merchandise rules.",
          "next": "Co-design the activity with a Palauan cultural host and obtain written labour, venue, state, community and tax clearances before publicity."
        },
        "mixed-mission": {
          "status": "specialist",
          "route": "Business visitor entry for exploration plus labour, FIAC and local approvals for active work",
          "detail": "Meetings, Forum-related observation, AI teaching, community work, books, art and business development can share a visit, but Palau's visitor lane stops at work and commercial activity.",
          "next": "Give one local coordinator a simple ledger of every activity, payer, customer, state, community and item entering Palau, then obtain written clearance line by line."
        }
      },
      "steps": [
        "Submit the Palau Entry Form no more than 72 hours before departure and save the QR code.",
        "Enter on the tourist or business visa only for the visitor purposes stated to Immigration.",
        "Before any talk, workshop, performance, consulting or local service, have the host contact Immigration and the Bureau of Labour and Human Resources.",
        "Do not begin until the labour permit or written exemption is actually issued.",
        "For a founder or continuing operation, complete company, FIAC, business-licence, PGST, tax and labour steps separately.",
        "Use a Palauan publisher, importer, promoter or community organisation for local stock, receipts, venues and protocol.",
        "Apply for any visitor extension at least seven days before expiry and keep the authorised dates with the travel file."
      ],
      "cautions": [
        "Was the entry form submitted inside, not before, the 72-hour pre-departure window?",
        "Is a meeting or conference visit drifting into employment, delivery or commercial operation?",
        "Has Immigration and Labour answered the unpaid-speaking question in writing for this exact role?",
        "Is a Digital Resident tourist extension being mistaken for physical work permission?",
        "Does the local host have authority and time to obtain a labour permit before the event?",
        "Will a technical fee, local business presence, FIAC or PGST registration create Palau tax obligations?",
        "Have the relevant state, traditional leaders and community partners been included rather than treating national permission as the whole relationship?",
        "Are books, equipment, merchandise and goods for sale assigned to a Palauan importer and customs process?"
      ],
      "sources": [
        {
          "title": "Immigration: travelling to Palau",
          "authority": "Palau Bureau of Customs and Border Protection",
          "url": "https://bcbp.pw/?page_id=165",
          "checked": "21 August 2026",
          "supports": "visa on arrival, 30-day tourist and business stays, extensions, entry documents, meetings and conferences, visitor work prohibition and labour-permit requirement"
        },
        {
          "title": "Palau Entry Form and border management",
          "authority": "Palau Bureau of Customs and Border Protection",
          "url": "https://bcbp.pw/?page_id=159",
          "checked": "21 August 2026",
          "supports": "entry-form QR process and 72-hour submission window"
        },
        {
          "title": "Foreign Investment Act",
          "authority": "Republic of Palau",
          "url": "https://www.palaugov.pw/wp-content/uploads/2021/10/Foreign-Investment-Act.pdf",
          "checked": "21 August 2026",
          "supports": "FIAC framework, Foreign Investment Board review and community and compliance considerations"
        },
        {
          "title": "Foreign Investment Approval Certificate application checklist",
          "authority": "Republic of Palau Foreign Investment Board",
          "url": "https://www.palaugov.pw/wp-content/uploads/FIAC-APPLICATION-CHECKLIST.pdf",
          "checked": "21 August 2026",
          "supports": "entity, charter, application, fee and supporting-document sequence"
        },
        {
          "title": "Foreign Investment Act Regulations",
          "authority": "Republic of Palau",
          "url": "https://www.palaugov.pw/wp-content/uploads/2021/09/Foreign_Investment_Act_Regulations.pdf",
          "checked": "21 August 2026",
          "supports": "foreign-worker and independent-contractor treatment and FIAC operating conditions"
        },
        {
          "title": "Taxpayer registration and TIN application",
          "authority": "Palau Bureau of Revenue and Taxation",
          "url": "https://www.palaugov.pw/wp-content/uploads/Tax-001-Taxpayer-Registration-and-TIN-Application-Form.pdf",
          "checked": "21 August 2026",
          "supports": "taxpayer and business registration details"
        },
        {
          "title": "Business licence application",
          "authority": "Palau Bureau of Revenue and Taxation",
          "url": "https://www.palaugov.pw/wp-content/uploads/Tax-001A-Business-License-Application-Form.pdf",
          "checked": "21 August 2026",
          "supports": "business-licence categories and application evidence before local commercial activity"
        },
        {
          "title": "Palau Goods and Services Tax",
          "authority": "Palau Bureau of Revenue and Taxation",
          "url": "https://www.palaugov.pw/taxreform/pgst/",
          "checked": "21 August 2026",
          "supports": "10% PGST, USD 300,000 threshold and compulsory registration for FIAC holders"
        },
        {
          "title": "Business Profits Tax",
          "authority": "Palau Bureau of Revenue and Taxation",
          "url": "https://www.palaugov.pw/taxreform/bpt",
          "checked": "21 August 2026",
          "supports": "BPT for PGST-registered businesses and FIAC holders and 12% net-income rate"
        },
        {
          "title": "Tax Reform Act RPPL 11-11",
          "authority": "Republic of Palau",
          "url": "https://www.palaugov.pw/wp-content/uploads/2022/04/RPPL-11-11.pdf",
          "checked": "21 August 2026",
          "supports": "10% non-resident tax on technical fees and permanent-establishment boundary"
        },
        {
          "title": "Palau Constitution",
          "authority": "Republic of Palau National Government",
          "url": "https://www.palaugov.pw/about-palau/constitution/",
          "checked": "21 August 2026",
          "supports": "traditional heritage and national-identity context for community protocol"
        },
        {
          "title": "Palau and Pacific public-service language profile",
          "authority": "Republic of Palau National Government",
          "url": "https://www.palaugov.pw/executive-branch/ministries/hrctd/hr/ppscc/ppscc-members/",
          "checked": "21 August 2026",
          "supports": "Palauan and English practical-language signal"
        },
        {
          "title": "Pacific Islands Forum Chair statement",
          "authority": "Pacific Islands Forum Secretariat",
          "url": "https://forumsec.org/publications/statement-prime-minister-solomon-islands-and-chair-pacific-islands-forum-hon-jeremiah",
          "checked": "21 August 2026",
          "supports": "55th Forum Leaders Meeting in Palau in early September 2026 and climate and regional purpose; no public speaking access inferred"
        },
        {
          "title": "Forum Troika preparations for Palau",
          "authority": "Pacific Islands Forum Secretariat",
          "url": "https://forumsec.org/publications/release-forum-troika-leaders-meet-fiji-discuss-emerging-regional-challenges-and",
          "checked": "21 August 2026",
          "supports": "official 2026 Palau host preparations and controlled leaders' process"
        }
      ]
    }
  ]
};
