const jsonHeaders = {
    "Content-Type": "application/json; charset=utf-8",
};

const parseAllowedOrigins = (value) =>
    String(value || "")
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);

const isOriginAllowed = (origin, allowedOrigins) => {
    if (!origin) {
        return true;
    }

    return allowedOrigins.includes(origin);
};

const buildCorsHeaders = (origin, allowedOrigins) => {
    const headers = {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
    };

    if (isOriginAllowed(origin, allowedOrigins)) {
        headers["Access-Control-Allow-Origin"] =
            origin || allowedOrigins[0] || "*";
    }

    return headers;
};

const jsonResponse = (body, status = 200, extraHeaders = {}) =>
    new Response(JSON.stringify(body), {
        status,
        headers: {
            ...jsonHeaders,
            ...extraHeaders,
        },
    });

const normalizeField = (value) => String(value || "").trim();

const validatePayload = (payload) => {
    const fullName = normalizeField(payload.full_name);
    const email = normalizeField(payload.email);
    const phone = normalizeField(payload.phone);
    const city = normalizeField(payload.city);
    const interest = normalizeField(payload.interest);
    const message = normalizeField(payload.message);

    if (!fullName) {
        return { error: "Nama lengkap wajib diisi." };
    }

    if (!email) {
        return { error: "Email wajib diisi." };
    }

    if (!phone) {
        return { error: "Nomor WhatsApp wajib diisi." };
    }

    if (!city) {
        return { error: "Kota target wajib diisi." };
    }

    if (!interest) {
        return { error: "Minat paket wajib dipilih." };
    }

    return {
        data: {
            full_name: fullName,
            email,
            phone,
            city,
            interest,
            message,
        },
    };
};

const interestLabel = (interest) => {
    switch (interest) {
        case "mie":
            return "Mie Star Only — Rp 235 jt";
        case "star":
            return "Star Moment Only — Rp 128 jt";
        case "combo":
        default:
            return "Mie Star + Star Moment — Rp 320 jt";
    }
};

const buildEmailHtml = (data) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #2b1b10; line-height: 1.8; background: linear-gradient(135deg, #fff9f5 0%, #fff5f0 100%); padding: 24px;">
        <div style="background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(43, 27, 16, 0.1); padding: 32px; max-width: 640px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 32px; border-bottom: 3px solid #d4a574; padding-bottom: 20px;">
                <h2 style="margin: 0; font-size: 28px; color: #8b5a2b;">🍜 Franchise Inquiry Baru</h2>
                <p style="margin: 8px 0 0 0; color: #a0795f; font-size: 14px;">Permohonan Waralaba Mie Star</p>
            </div>
            <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                <tr style="background: #faf7f2;">
                    <td style="padding: 14px 16px; font-weight: bold; width: 160px; color: #8b5a2b; border-left: 4px solid #d4a574;">Nama</td>
                    <td style="padding: 14px 16px; color: #2b1b10;">${data.full_name}</td>
                </tr>
                <tr>
                    <td style="padding: 14px 16px; font-weight: bold; color: #8b5a2b; border-left: 4px solid #d4a574;">Email</td>
                    <td style="padding: 14px 16px; color: #2b1b10;">${data.email}</td>
                </tr>
                <tr style="background: #faf7f2;">
                    <td style="padding: 14px 16px; font-weight: bold; color: #8b5a2b; border-left: 4px solid #d4a574;">WhatsApp</td>
                    <td style="padding: 14px 16px; color: #2b1b10;">${data.phone}</td>
                </tr>
                <tr>
                    <td style="padding: 14px 16px; font-weight: bold; color: #8b5a2b; border-left: 4px solid #d4a574;">Kota Target</td>
                    <td style="padding: 14px 16px; color: #2b1b10;">${data.city}</td>
                </tr>
                <tr style="background: #faf7f2;">
                    <td style="padding: 14px 16px; font-weight: bold; color: #8b5a2b; border-left: 4px solid #d4a574;">Minat Paket</td>
                    <td style="padding: 14px 16px; color: #d4a574; font-weight: 600;">${interestLabel(data.interest)}</td>
                </tr>
                <tr>
                    <td style="padding: 14px 16px; font-weight: bold; vertical-align: top; color: #8b5a2b; border-left: 4px solid #d4a574;">Pesan</td>
                    <td style="padding: 14px 16px; color: #2b1b10; white-space: pre-wrap;">${data.message || "<em style='color: #a0795f;'>-</em>"}</td>
                </tr>
            </table>
            <div style="text-align: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #e8dcc8;">
                <p style="margin: 0; color: #a0795f; font-size: 12px;">Inquiry diterima pada ${new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>
        </div>
    </div>
`;

const buildEmailText = (data) =>
    [
        "Franchise Inquiry Baru",
        `Nama: ${data.full_name}`,
        `Email: ${data.email}`,
        `WhatsApp: ${data.phone}`,
        `Kota Target: ${data.city}`,
        `Minat Paket: ${interestLabel(data.interest)}`,
        `Pesan: ${data.message || "-"}`,
    ].join("\n");

export default {
    async fetch(request, env) {
        const origin = request.headers.get("Origin");
        const allowedOrigins = parseAllowedOrigins(env.FRONTEND_ORIGIN);
        const corsHeaders = buildCorsHeaders(origin, allowedOrigins);

        if (!isOriginAllowed(origin, allowedOrigins)) {
            return jsonResponse(
                { error: "Origin tidak diizinkan." },
                403,
                corsHeaders,
            );
        }

        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: corsHeaders,
            });
        }

        if (request.method !== "POST") {
            return jsonResponse(
                { error: "Method tidak diizinkan." },
                405,
                corsHeaders,
            );
        }

        let payload;

        try {
            payload = await request.json();
        } catch {
            return jsonResponse(
                { error: "Body request harus berupa JSON valid." },
                400,
                corsHeaders,
            );
        }

        const validation = validatePayload(payload);

        if (validation.error) {
            return jsonResponse({ error: validation.error }, 400, corsHeaders);
        }

        const data = validation.data;

        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: env.FROM_EMAIL,
                to: [env.TO_EMAIL],
                subject: `Franchise Inquiry - ${data.full_name}`,
                reply_to: data.email,
                html: buildEmailHtml(data),
                text: buildEmailText(data),
            }),
        });

        if (!resendResponse.ok) {
            const errorBody = await resendResponse.text().catch(() => "");
            return jsonResponse(
                {
                    error: "Resend gagal mengirim email.",
                    details: errorBody || undefined,
                },
                502,
                corsHeaders,
            );
        }

        return jsonResponse(
            {
                ok: true,
                message: "Inquiry berhasil dikirim.",
            },
            200,
            corsHeaders,
        );
    },
};
