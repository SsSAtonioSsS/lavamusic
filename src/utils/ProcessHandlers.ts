import type { Lavamusic } from "../structures/index";
import logger from "../structures/Logger";

/**
 * AntiCrash handler to prevent the bot from crashing on unhandled errors.
 */
export function setupAntiCrash(client: Lavamusic): void {
    process.on("unhandledRejection", (reason, promise) => {
        logger.error("Unhandled Rejection at:", promise, "reason:", reason);
    });

    process.on("uncaughtException", (err) => {
        logger.error("Uncaught Exception thrown:", err);
    });

    const handleExit = async (): Promise<void> => {
        if (client) {
            logger.star("Disconnecting from Discord...");
            await client.destroy();
            logger.success("Successfully disconnected from Discord!");
        }
        process.exit(0);
    };

    process.on("SIGINT", handleExit);
    process.on("SIGTERM", handleExit);
    process.on("SIGQUIT", handleExit);
}

/**
 * Project: lavamusic
 * Author: Appu
 * Main Contributor: LucasB25
 * Company: Coders
 * Copyright (c) 2024. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/YQsGbTwPBx
 */
