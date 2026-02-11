import type { TextChannel } from "discord.js";
import type { Player, Track, TrackStartEvent } from "lavalink-client";
import { Event, type Lavamusic } from "../../structures/index";
import { LavamusicEventType } from "../../types/events";
import { updateSetup } from "../../utils/SetupSystem";
import { env } from "../../env";

export default class QueueEnd extends Event {
	constructor(client: Lavamusic, file: string) {
		super(client, file, {
			type: LavamusicEventType.Player,
			name: "queueEnd",
		});
	}

	public async run(player: Player, _track: Track | null, _payload: TrackStartEvent): Promise<void> {
		const guild = this.client.guilds.cache.get(player.guildId);
		if (!guild) return;
		const locale = await this.client.db.getLanguage(player.guildId);
		await updateSetup(this.client, guild, locale);

		if (player.voiceChannelId) {
			await this.client.utils.setVoiceStatus(this.client, player.voiceChannelId, "");
		}

		const messageId = player.get<string | undefined>("messageId");
		if (messageId) {
			const channel = guild.channels.cache.get(player.textChannelId!) as TextChannel;
			if (channel) {
				const message = await channel.messages.fetch(messageId).catch(() => {
					null;
				});
				if (message && message.editable) {
					await message.edit({ components: [] }).catch(() => {
						null;
					});
				}
			}
		}
		
		const idleTime = env.IDLE_IN_CHANNEL;
		if (idleTime === -1) return;
		if (idleTime === 0) {
			await player.destroy();
			return;
		}

		const timeout = setTimeout(async () => {
			if (player && !player.playing) {
				await player.destroy();
			}
		}, idleTime * 1000);
		player.set("leaveTimeout", timeout);
	}
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
