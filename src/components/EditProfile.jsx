import { useEffect, useMemo, useState } from "react";
import { useStudentProfileContext } from "../context/StudentProfileContext";
import { User, GraduationCap, Link as LinkIcon, Save, X } from "lucide-react";

const SECTIONS = [
  { id: "personal", label: "Personal", icon: User },
  { id: "academic", label: "Academic", icon: GraduationCap },
  { id: "links", label: "Links", icon: LinkIcon },
];

export const EditProfile = ({ onClose }) => {
  const { profile, saveProfile } = useStudentProfileContext();
  const [original, setOriginal] = useState(null);
  const [form, setForm] = useState({});
  const [active, setActive] = useState("personal");

  useEffect(() => {
    if (profile) {
      setOriginal(profile);
      setForm(profile);
    }
  }, [profile]);

  const changes = useMemo(() => {
    if (!original) return 0;
    return Object.keys(form).filter((k) => form[k] !== original[k]).length;
  }, [form, original]);

  const changed = (field) => original && form[field] !== original[field];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    await saveProfile(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto my-8 h-[90vh] w-[95%] max-w-6xl rounded-3xl bg-white/90 shadow-2xl flex overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 border-r bg-white/60 p-4 flex-col">
          <h3 className="mb-6 text-sm font-semibold text-gray-500">
            PROFILE EDITOR
          </h3>

          {SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-3 rounded-xl px-4 py-2 text-sm transition
                ${
                  active === id
                    ? "bg-indigo-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </aside>

        {/* Main Editor */}
        <main className="flex-1 overflow-y-auto p-8 space-y-10">
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Edit Profile
              </h1>
              <p className="mt-1 text-gray-500">
                Changes are saved only when you click save
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 hover:bg-gray-200"
            >
              <X />
            </button>
          </header>

          {active === "personal" && (
            <Section title="Personal Information">
              <Input
                label="Headline"
                name="headline"
                value={form.headline || ""}
                onChange={handleChange}
                changed={changed("headline")}
              />
              <TextArea
                label="Bio"
                name="bio"
                value={form.bio || ""}
                onChange={handleChange}
                changed={changed("bio")}
              />
            </Section>
          )}

          {active === "academic" && (
            <Section title="Academic Details">
              <Input
                label="School"
                name="school"
                value={form.school || ""}
                onChange={handleChange}
                changed={changed("school")}
              />
              <Input
                label="Graduation Year"
                name="graduationYear"
                value={form.graduationYear || ""}
                onChange={handleChange}
                changed={changed("graduationYear")}
              />
            </Section>
          )}

          {active === "links" && (
            <Section title="Online Presence">
              <Input
                label="LinkedIn"
                name="linkedinUrl"
                value={form.linkedinUrl || ""}
                onChange={handleChange}
                changed={changed("linkedinUrl")}
              />
              <Input
                label="GitHub"
                name="githubUrl"
                value={form.githubUrl || ""}
                onChange={handleChange}
                changed={changed("githubUrl")}
              />
            </Section>
          )}
        </main>

        {/* Action Bar */}
        <div className="absolute bottom-6 right-6 flex items-center gap-4 rounded-2xl bg-white shadow-xl px-5 py-3">
          <span className="text-sm text-gray-500">
            {changes} change{changes !== 1 && "s"}
          </span>

          <button
            onClick={handleSave}
            disabled={changes === 0}
            className={`flex items-center gap-2 rounded-xl px-5 py-2 text-white transition
              ${
                changes
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            <Save size={16} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------- Components ---------- */

const Section = ({ title, children }) => (
  <section className="space-y-6">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    {children}
  </section>
);

const Input = ({ label, changed, ...props }) => (
  <div className="space-y-1">
    <label className="flex justify-between text-sm font-medium text-gray-600">
      {label}
      {changed && (
        <span className="text-xs text-indigo-600 font-semibold">Modified</span>
      )}
    </label>
    <input
      {...props}
      className={`w-full rounded-xl border px-4 py-2 transition
        ${changed ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}`}
    />
  </div>
);

const TextArea = ({ label, changed, ...props }) => (
  <div className="space-y-1">
    <label className="flex justify-between text-sm font-medium text-gray-600">
      {label}
      {changed && (
        <span className="text-xs text-indigo-600 font-semibold">Modified</span>
      )}
    </label>
    <textarea
      {...props}
      rows={4}
      className={`w-full rounded-xl border px-4 py-2 transition
        ${changed ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}`}
    />
  </div>
);
