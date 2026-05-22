const isBrowser = typeof window !== "undefined";
const inquiryStorageKey = "mie_star_franchise_inquiries";

const readStoredJson = (key, fallback) => {
    if (!isBrowser) {
        return fallback;
    }

    try {
        const rawValue = window.localStorage.getItem(key);
        return rawValue ? JSON.parse(rawValue) : fallback;
    } catch {
        return fallback;
    }
};

const writeStoredJson = (key, value) => {
    if (!isBrowser) {
        return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
};

const clearStoredAuth = () => {
    if (!isBrowser) {
        return;
    }

    window.localStorage.removeItem("mie_star_auth_user");
    window.localStorage.removeItem("base44_access_token");
    window.localStorage.removeItem("token");
};

export const base44 = {
    auth: {
        me: async () => {
            const storedUser = readStoredJson("mie_star_auth_user", null);
            return storedUser;
        },
        logout: () => {
            clearStoredAuth();
        },
        redirectToLogin: () => {
            if (isBrowser) {
                window.location.href = "/";
            }
        },
    },
    entities: {
        FranchiseInquiry: {
            create: async (data) => {
                const existingInquiries = readStoredJson(inquiryStorageKey, []);
                const newInquiry = {
                    id:
                        globalThis.crypto?.randomUUID?.() ??
                        `inquiry_${Date.now()}`,
                    created_at: new Date().toISOString(),
                    ...data,
                };

                const updatedInquiries = [...existingInquiries, newInquiry];
                writeStoredJson(inquiryStorageKey, updatedInquiries);

                return newInquiry;
            },
        },
    },
};
