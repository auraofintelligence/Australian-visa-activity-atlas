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
    }
  ]
};
