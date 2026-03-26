// import { NextResponse } from "next/server";
// import sequelize from "@/lib/db";
// import Lead from "@/models/Lead";

// // Ensure DB is synced once per server lifecycle
// let isInitialized = false;

// async function ensureDb() {
//   if (!isInitialized) {
//     await sequelize.authenticate();
//     await Lead.sync({ alter: false }); // table already created via db-init script
//     isInitialized = true;
//   }
// }

// export async function POST(request) {
//   try {
//     await ensureDb();

//     const body = await request.json();
//     const { name, email, number, company_name, message, source_page } = body;

//     // ── Required field check ──────────────────────────────────────────────────
//     const required = { name, email, number, company_name };
//     const missing = Object.entries(required)
//       .filter(([, v]) => !v || String(v).trim() === "")
//       .map(([k]) => k);

//     if (missing.length) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: `Missing required fields: ${missing.join(", ")}`,
//           fields: missing,
//         },
//         { status: 400 },
//       );
//     }

//     // ── Capture IP ────────────────────────────────────────────────────────────
//     const ip =
//       request.headers
//         .get("x-forwarded-for")
//         ?.split(",")[0]
//         .trim() ||
//       request.headers.get("x-real-ip") ||
//       null;

//     // ── Save to DB ────────────────────────────────────────────────────────────
//     const lead = await Lead.create({
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       number: number.trim(),
//       company_name: company_name.trim(),
//       message: message?.trim() || null,
//       source_page:
//         source_page?.trim() || request.headers.get("referer") || null,
//       ip_address: ip,
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Thank you! We'll be in touch shortly.",
//         id: lead.id,
//       },
//       { status: 201 },
//     );
//   } catch (err) {
//     // Sequelize validation errors → 422
//     if (err.name === "SequelizeValidationError") {
//       const errors = err.errors.map((e) => ({
//         field: e.path,
//         message: e.message,
//       }));
//       return NextResponse.json(
//         { success: false, message: "Validation failed", errors },
//         { status: 422 },
//       );
//     }

//     console.error("[Lead API Error]", err);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }
