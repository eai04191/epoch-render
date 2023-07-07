import { serve } from "std/http/server.ts";
import { ImageResponse } from "og_edge";

function imageResoponse({
    req: _req,
    time,
}: {
    req: Request;
    time: number;
}): Response {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#fafafa",
                }}
            >
                <p
                    style={{
                        color: "#1f2937",
                        fontSize: 100,
                        fontWeight: "bold",
                    }}
                >
                    {time}
                </p>
                <p
                    style={{
                        color: "#9ca3af",
                        fontSize: 60,
                    }}
                >
                    {new Date(time).toLocaleString()}
                </p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}

serve((req: Request): Response => {
    const { pathname } = new URL(req.url);
    switch (pathname) {
        case "/render": {
            return imageResoponse({ req, time: Date.now() });
        }
    }

    return new Response("Not Found", { status: 404 });
});
