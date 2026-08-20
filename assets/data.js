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
    reviewed: "20 August 2026",
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
    }
  ]
};
