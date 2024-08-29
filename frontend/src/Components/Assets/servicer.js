import p1 from "./plumber1.jpeg";
import p2 from "./plumber2.jpg";
import p3 from "./plumber3.jpeg";
import p4 from "./plumber4.jpg";
import m1 from "./mechanic1.jpg";
import m2 from "./mechanic2.jpeg";
import m3 from "./mechanic3.jpeg";
import m4 from "./mechanic4.jpeg";
import r1 from "./rmp1.jpg";
import r2 from "./rmp1.jpg";
import r3 from "./rmp3.png";
import e1 from "./electrician1.jpeg";
import e2 from "./electrician2.jpeg";
import e3 from "./electrician3.jpeg";
import e4 from "./electrician4.jpg";
import b1 from "./barber1.jpg";
import b2 from "./barber2.jpeg";
import b3 from "./barber3.jpg";
import b4 from "./barber4.jpg";
import mv1 from "./milk2.jpeg";
import mv2 from "./milk3.jpeg";
import mv3 from "./milk4.jpeg";
import mv4 from "./milk1.JPG";
import paint1 from "./painter1.jpeg";
import paint2 from "./painter2.jpg";
import paint3 from "./painter3.jpeg";
import t1 from "./tailor1.jpeg";
import t2 from "./tailor2.jpeg";
import t3 from "./tailor3.jpeg";
import t4 from "./tailor4.jpg";
let servicer =[
    {
        id: 1,
        name: "Lakshmi Ganapathi Plumbers",
        category: "plumber",
        image: p1,
        address: "R/NO -2, NEAR RAMALAYAM, BHIMAVARAM, WEST GODAVARI, ANDHRA PRADESH.",
        description: "We provide all types of plumbing services including leak repairs, installations, and maintenance.",
        phone: "9876543210",
        price: "$3455",
        user: "Rajesh"
    },
    {
        id: 2,
        name: "Sai Krishna Plumbers",
        category: "plumber",
        image: p2,
        address: "3-6-102/4, OPP. GANESH TEMPLE, KUKATPALLY, HYDERABAD, TELANGANA.",
        description: "Expert plumbing services for residential and commercial properties. 24/7 service available.",
        phone: "9876543211",
        price: "$3455",
        user: "Venkatesh"
    },
    {
        id: 3,
        name: "Venkatadri Plumbers",
        category: "plumber",
        image: p3,
        address: "PLOT NO. 56, SHIVA ENCLAVE, VIZAG, ANDHRA PRADESH.",
        description: "Reliable and affordable plumbing solutions. Specializing in bathroom and kitchen plumbing.",
        phone: "9876543212",
        price: "$3455",
        user: "Anil"
    },
    {
        id: 4,
        name: "Sri Venkateswara Plumbing Services",
        category: "plumber",
        image: p4,
        address: "15/3, NEAR TIRUPATI TEMPLE, TIRUPATI, ANDHRA PRADESH.",
        description: "Quality plumbing services with experienced professionals. Guaranteed satisfaction.",
        phone: "9876543213",
        price: "$3455",
        user: "Murali"
    },
    {
        id: 5,
        name: "Lakshmi Auto Mechanics",
        category: "mechanic",
        image: m1,
        address: "12-34-56, Near R.T.C Complex, Visakhapatnam, Andhra Pradesh",
        description: "Expert in car and bike repairs, offering quality services with genuine parts",
        phone: "9876543215",
        price: "$3455",
        user: "Ravi"
    },
    {
        id: 6,
        name: "Sai Auto Garage",
        category: "mechanic",
        image: m2,
        address: "Plot No. 7, Opposite Metro Station, Begumpet, Hyderabad, Telangana",
        description: "Professional mechanics providing comprehensive vehicle repair and maintenance services",
        phone: "9876543216",
        price: "$3455",
        user: "Suresh"
    },
    {
        id: 7,
        name: "Ganesh Motors",
        category: "mechanic",
        image: m3,
        address: "45/2, Near City Center Mall, Pune, Maharashtra",
        description: "Trusted automotive repair shop specializing in engine diagnostics and repairs",
        phone: "9876543217",
        price: "$3455",
        user: "Prasad"
    },
    {
        id: 8,
        name: "Venkat Car Service",
        category: "mechanic",
        image: m4,
        address: "23-B, Next to Petrol Pump, Mylapore, Chennai, Tamil Nadu",
        description: "Reliable and affordable car service center with experienced mechanics for all brands",
        phone: "9876543218",
        price: "$3455",
        user: "Karthik"
    },
    {
        id: 9,
        name: "Dr. Ravi Kumar",
        category: "RMP",
        image: r1,
        address: "22-45, Near Railway Station, Vijayawada, Andhra Pradesh",
        description: "Experienced RMP doctor providing general health consultations and minor treatments",
        phone: "9876543219",
        price: "$3455",
        user: "Ravi"
    },
    {
        id: 10,
        name: "Dr. Sushma Reddy",
        category: "RMP",
        image: r2,
        address: "Plot No. 78, Near Central Park, Jayanagar, Bengaluru, Karnataka",
        description: "Skilled in primary healthcare and emergency medical services with over 15 years of experience",
        phone: "9876543220",
        price: "$3455",
        user: "Sushma"
    },
    {
        id: 11,
        name: "Dr. Rajesh Gupta",
        category: "RMP",
        image: r3,
        address: "14/8, Opposite City Hospital, Sector 22, Noida, Uttar Pradesh",
        description: "Dedicated RMP doctor offering quality medical care and health advice to patients",
        phone: "9876543221",
        price: "$3455",
        user: "Rajesh"
    },
    {
        id: 12,
        name: "Vijay Electrical Works",
        category: "electrician",
        image: e1,
        address: "15-32, Near Hanuman Temple, Rajahmundry, Andhra Pradesh",
        description: "Expert electrical services for residential and commercial properties, specializing in wiring and repairs",
        phone: "9876543222",
        price: "$3455",
        user: "Vijay"
    },
    {
        id: 13,
        name: "Sharma Electricians",
        category: "electrician",
        image: e2,
        address: "Shop No. 10, Market Road, Sector 18, Chandigarh",
        description: "Professional electricians offering installation, maintenance, and repair services for all types of electrical systems",
        phone: "9876543223",
        price: "$3455",
        user: "Sharma"
    },
    {
        id: 14,
        name: "Krishna Electrical Solutions",
        category: "electrician",
        image: e3,
        address: "23/4, Near Green Park, South Delhi, Delhi",
        description: "Reliable and affordable electrical services with a team of certified electricians for both small and large projects",
        phone: "9876543224",
        price: "$3455",
        user: "Krishna"
    },
    {
        id: 15,
        name: "Patel Electrical Services",
        category: "electrician",
        image: e4,
        address: "House No. 56, Near Central School, Navrangpura, Ahmedabad, Gujarat",
        description: "Comprehensive electrical solutions including fault finding, wiring, and appliance repair by experienced professionals",
        phone: "9876543225",
        price: "$3455",
        user: "Patel"
    },
    {
        id: 16,
        name: "Classic Hair Studio",
        category: "barber",
        image: b1,
        address: "Shop No. 4, Near Clock Tower, Visakhapatnam, Andhra Pradesh",
        description: "Professional barber shop offering haircuts, styling, and grooming services",
        phone: "9876543226",
        price: "$3455",
        user: "Anand"
    },
    {
        id: 17,
        name: "Raj Barber Shop",
        category: "barber",
        image: b2,
        address: "45/B, Near Bus Stand, MG Road, Vijayawada, Andhra Pradesh",
        description: "Experienced barbers providing quality haircuts and beard trimming",
        phone: "9876543227",
        price: "$3455",
        user: "Raj"
    },
    {
        id: 18,
        name: "Elegance Men's Salon",
        category: "barber",
        image: b3,
        address: "22-12, Next to Post Office, Alwarpet, Guntur, Andhra Pradesh",
        description: "Modern salon with expert barbers for stylish haircuts and grooming",
        phone: "9876543228",
        price: "$3455",
        user: "Raju"
    },
    {
        id: 19,
        name: "Guru Hair Cutting Saloon",
        category: "barber",
        image: b4,
        address: "56-4-12, Opposite Police Station, Chittoor, Andhra Pradesh",
        description: "Affordable and skilled barber services for all age groups",
        phone: "9876543229",
        price: "$3455",
        user: "Guru"
    },
    {
        id: 20,
        name: "Dairy Delight",
        category: "milk vendor",
        image: mv1,
        address: "12-6, Near Market Yard, Rajahmundry, Andhra Pradesh",
        description: "Fresh and pure milk delivery service, sourced from local farms",
        phone: "9876543230",
        price: "$3455",
        user: "Ramesh"
    },
    {
        id: 21,
        name: "Fresh Milk Supply",
        category: "milk vendor",
        image: mv2,
        address: "23-A, Next to Central Park, Eluru, Andhra Pradesh",
        description: "Daily fresh milk supply with doorstep delivery service",
        phone: "9876543231",
        price: "$3455",
        user: "Srinivas"
    },
    {        id: 22,
        name: "Pure Dairy Products",
        category: "milk vendor",
        image: mv3,
        address: "Plot No. 45, Near Railway Station, Tirupati, Andhra Pradesh",
        description: "Providing high-quality milk and dairy products from organic farms",
        phone: "9876543232",
        price: "$3455",
        user: "Sridhar"
    },
    {
        id: 23,
        name: "Healthy Milk Service",
        category: "milk vendor",
        image: mv4,
        address: "Shop No. 2, Opposite School, Kakinada, Andhra Pradesh",
        description: "Reliable milk vendor offering fresh and hygienic milk delivery",
        phone: "9876543233",
        price: "$3455",
        user: "Manoj"
    },
    {
        id: 24,
        name: "Rainbow Paints",
        category: "painter",
        image: paint1,
        address: "12-B, Near City Mall, Vijayawada, Andhra Pradesh",
        description: "Professional painting services for homes and offices with quality finishes",
        phone: "9876543234",
        price: "$3455",
        user: "Ravi"
    },
    {
        id: 25,
        name: "Color Magic Painters",
        category: "painter",
        image: paint2,
        address: "56-3-12, Opposite Main Market, Guntur, Andhra Pradesh",
        description: "Expert painters specializing in interior and exterior painting solutions",
        phone: "9876543235",
        price: "$3455",
        user: "Suresh"
    },
    {
        id: 26,
        name: "Shine Paint Services",
        category: "painter",
        image: paint3,
        address: "22-8, Near Bus Depot, Visakhapatnam, Andhra Pradesh",
        description: "Affordable and reliable painting services for residential and commercial projects",
        phone: "9876543236",
        price: "$3455",
        user: "Vijay"
    },
    {
        id: 27,
        name: "Tailor's Touch",
        category: "tailor",
        image: t1,
        address: "45-7-22, Near Market Square, Vijayawada, Andhra Pradesh",
        description: "Custom tailoring services for men, women, and children, specializing in ethnic wear",
        phone: "9876543237",
        price: "$3455",
        user: "Manoj"
    },
    {
        id: 28,
        name: "Elegant Tailors",
        category: "tailor",
        image: t2,
        address: "Shop No. 10, Near Park, Guntur, Andhra Pradesh",
        description: "Professional tailoring services for all types of garments and alterations",
        phone: "9876543238",
        price: "$3455",
        user: "Raghav"
    },
    {
        id: 29,
        name: "Perfect Fit Tailors",
        category: "tailor",
        image: t3,
        address: "23/B, Opposite Mall, Visakhapatnam, Andhra Pradesh",
        description: "Expert tailors offering bespoke tailoring and custom alterations",
        phone: "9876543239",
        price: "$3455",
        user: "Vijay"
    },
    {
        id: 30,
        name: "Royal Stitch",
        category: "tailor",
        image: t4,
        address: "14/6, Near College Road, Chittoor, Andhra Pradesh",
        description: "Tailoring services specializing in wedding and formal attire for all occasions",
        phone: "9876543240",
        price: "$3455",
        user: "Murali"
    }
];


export default servicer;