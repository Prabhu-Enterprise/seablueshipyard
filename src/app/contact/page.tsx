import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/lib/nav";
import { css } from "../../../styled-system/css";
import { grid } from "../../../styled-system/patterns";

export const metadata: Metadata = {
  title: "Contact Us | Sea Blue Shipyard Ltd.",
  description: "Get in touch with Sea Blue Shipyard Ltd. — Kochi head office and Goa branch contact details, department directory, and enquiry form.",
};

const DEPARTMENTS = [
  { dept: "General Information", contact: "Cijo Mathew P", phone: "+91 94465 90666", email: "info@seablueshipyard.com" },
  { dept: "Work Enquiries", contact: "Alan Richard", phone: "+91 97466 35711", email: "enquiry@seablueshipyard.com" },
  { dept: "Admin & IT", contact: "Nitheesh Krishnan", phone: "+91 73068 22503", email: "sm@seablueshipyard.com" },
  { dept: "Commercial", contact: "Amruthraj Menon", phone: "+91 96334 86742", email: "admin@seablueshipyard.com" },
  { dept: "Business Development", contact: "C A Thomas", phone: "+91 94465 94666", email: "thomas@seablueshipyard.com" },
  { dept: "Marketing", contact: "Reji Mathew", phone: "+91 73068 00500", email: "bd@seablueshipyard.com" },
  { dept: "Production & Planning", contact: "George K C", phone: "+91 99956 92209", email: "production@seablueshipyard.com" },
  { dept: "Secretarial", contact: "Sanoosha Punnoose", phone: "+91 94476 44004", email: "cs@seablueshipyard.com" },
  { dept: "Purchase / Stores", contact: "Vivek V", phone: "+91 94963 34111", email: "stores@seablueshipyard.com" },
  { dept: "Finance", contact: "Dhanjith Paul", phone: "+91 94460 93006", email: "agmf@seablueshipyard.com" },
  { dept: "Accounts", contact: "Sreerag S Nair", phone: "+91 94463 54004", email: "accounts@seablueshipyard.com" },
  { dept: "HR & Recruitment", contact: "Sreekumar", phone: "+91 94460 79004", email: "headhr@seablueshipyard.com" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" subtitle="Reach the right department, or send us a general enquiry." />

      <section className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" }, py: { base: "12", md: "16" } })}>
        <div className={grid({ columns: { base: 1, md: 2 }, gap: "12" })}>
          <div>
            <h2 className={css({ fontFamily: "heading", fontSize: "xl", fontWeight: "700", color: "brand.navy", mb: "5" })}>
              Send a Message
            </h2>
            <ContactForm formType="general" />
          </div>

          <div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
            <div className={css({ border: "1px solid", borderColor: "gray.200", borderRadius: "md", p: "5" })}>
              <h3 className={css({ fontWeight: "700", color: "brand.navy" })}>Kochi — Head Office</h3>
              <p className={css({ mt: "2", fontSize: "sm", color: "fg", lineHeight: "1.7" })}>
                {COMPANY.kochiAddress}
                <br />
                <a href={`tel:${COMPANY.kochiPhone}`}>{COMPANY.kochiPhone}</a>
                <br />
                <a href={`mailto:${COMPANY.kochiEmail}`}>{COMPANY.kochiEmail}</a>
              </p>
            </div>
            <div className={css({ border: "1px solid", borderColor: "gray.200", borderRadius: "md", p: "5" })}>
              <h3 className={css({ fontWeight: "700", color: "brand.navy" })}>Goa Branch</h3>
              <p className={css({ mt: "2", fontSize: "sm", color: "fg", lineHeight: "1.7" })}>
                {COMPANY.goaAddress}
                <br />
                <a href={`tel:${COMPANY.goaPhone}`}>{COMPANY.goaPhone}</a>
                <br />
                <a href={`mailto:${COMPANY.goaEmail}`}>{COMPANY.goaEmail}</a>
              </p>
            </div>
            <div className={css({ borderRadius: "md", overflow: "hidden", boxShadow: "sm" })}>
              <iframe
                src={COMPANY.mapEmbedSrc}
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sea Blue Shipyard location map"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={css({ bg: "gray.50", py: { base: "12", md: "16" } })}>
        <div className={css({ maxW: "6xl", mx: "auto", px: { base: "4", md: "8" } })}>
          <h2 className={css({ fontFamily: "heading", fontSize: "xl", fontWeight: "700", color: "brand.navy", mb: "6" })}>
            Department Directory
          </h2>
          <div className={css({ overflowX: "auto" })}>
            <table className={css({ w: "full", fontSize: "sm", borderCollapse: "collapse" })}>
              <thead>
                <tr className={css({ textAlign: "left", borderBottom: "2px solid", borderColor: "brand.navy" })}>
                  <th className={css({ py: "2", pr: "4" })}>Department</th>
                  <th className={css({ py: "2", pr: "4" })}>Contact Person</th>
                  <th className={css({ py: "2", pr: "4" })}>Phone</th>
                  <th className={css({ py: "2" })}>Email</th>
                </tr>
              </thead>
              <tbody>
                {DEPARTMENTS.map((d) => (
                  <tr key={d.dept} className={css({ borderBottom: "1px solid", borderColor: "gray.200" })}>
                    <td className={css({ py: "2.5", pr: "4", fontWeight: "600", color: "brand.navy" })}>{d.dept}</td>
                    <td className={css({ py: "2.5", pr: "4", color: "fg" })}>{d.contact}</td>
                    <td className={css({ py: "2.5", pr: "4" })}>
                      <a href={`tel:${d.phone}`} className={css({ color: "fg" })}>{d.phone}</a>
                    </td>
                    <td className={css({ py: "2.5" })}>
                      <a href={`mailto:${d.email}`} className={css({ color: "brand.blue" })}>{d.email}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
