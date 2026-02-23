declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2019/pengaturan-windows-10-wsl/index.md": {
	id: "2019/pengaturan-windows-10-wsl/index.md";
  slug: "pengaturan-windows-10-untuk-pengembangan-web";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/berkenalan-dengan-arduino/index.md": {
	id: "2020/berkenalan-dengan-arduino/index.md";
  slug: "berkenalan-dengan-arduino";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/cara-install-dnscrypt-proxy-di-mx-linux/index.md": {
	id: "2020/cara-install-dnscrypt-proxy-di-mx-linux/index.md";
  slug: "cara-install-dnscrypt-proxy-di-mx-linux";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/cara-install-lemp-stack-centos-8/index.md": {
	id: "2020/cara-install-lemp-stack-centos-8/index.md";
  slug: "cara-install-lemp-stack-centos-8";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/cara-install-ssl-cloudflare-gratis-di-nginx/index.md": {
	id: "2020/cara-install-ssl-cloudflare-gratis-di-nginx/index.md";
  slug: "cara-install-ssl-cloudflare-gratis-di-nginx";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/ctf/index.md": {
	id: "2020/ctf/index.md";
  slug: "ctf";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/dual-boot-windows-dan-ubuntu-dengan-intel-optane/index.md": {
	id: "2020/dual-boot-windows-dan-ubuntu-dengan-intel-optane/index.md";
  slug: "dual-boot-windows-dan-ubuntu-dengan-intel-optane";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/membuat-iot-dengan-wemos-d1-r2-esp8266-serta-menggunakan-api-nodejs-dan-vuejs/index.md": {
	id: "2020/membuat-iot-dengan-wemos-d1-r2-esp8266-serta-menggunakan-api-nodejs-dan-vuejs/index.md";
  slug: "membuat-iot-dengan-wemos-d1-r2-esp8266-serta-menggunakan-api-nodejs-dan-vuejs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/migrasi-blog-ke-hugo/index.md": {
	id: "2020/migrasi-blog-ke-hugo/index.md";
  slug: "migrasi-blog-ke-hugo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/migrasi-ke-mx-linux/index.md": {
	id: "2020/migrasi-ke-mx-linux/index.md";
  slug: "migrasi-ke-mx-linux";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/restorasi-mysql-dari-data-directory/index.md": {
	id: "2020/restorasi-mysql-dari-data-directory/index.md";
  slug: "restorasi-mysql-dari-data-directory";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/selamat-tinggal-mx-linux/index.md": {
	id: "2020/selamat-tinggal-mx-linux/index.md";
  slug: "selamat-tinggal-mx-linux";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020/tips-menghemat-baterai-laptop-linux/index.md": {
	id: "2020/tips-menghemat-baterai-laptop-linux/index.md";
  slug: "tips-menghemat-baterai-laptop-linux";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021/async-await-javascript/index.md": {
	id: "2021/async-await-javascript/index.md";
  slug: "async-await-javascript";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023/pengantar-android-pentesting/index.md": {
	id: "2023/pengantar-android-pentesting/index.md";
  slug: "pengantar-android-pentesting";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024/bypassing-jailmonkey-root-detection-di-ios/index.md": {
	id: "2024/bypassing-jailmonkey-root-detection-di-ios/index.md";
  slug: "bypassing-jailmonkey-root-detection";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024/halo-fedora-41/index.mdx": {
	id: "2024/halo-fedora-41/index.mdx";
  slug: "halo-fedora-41";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"notes": {
"2019/halo-dunia/index.md": {
	id: "2019/halo-dunia/index.md";
  slug: "halo-dunia";
  body: string;
  collection: "notes";
  data: any
} & { render(): Render[".md"] };
"2021/pengalaman-mengikuti-kompetisi-gemastik-xiv/index.md": {
	id: "2021/pengalaman-mengikuti-kompetisi-gemastik-xiv/index.md";
  slug: "pengalaman-mengikuti-kompetisi-gemastik-xiv";
  body: string;
  collection: "notes";
  data: any
} & { render(): Render[".md"] };
"2021/renovasi-blog/index.md": {
	id: "2021/renovasi-blog/index.md";
  slug: "renovasi-blog";
  body: string;
  collection: "notes";
  data: any
} & { render(): Render[".md"] };
"2024/2023-ke-2024/index.md": {
	id: "2024/2023-ke-2024/index.md";
  slug: "2023-ke-2024";
  body: string;
  collection: "notes";
  data: any
} & { render(): Render[".md"] };
"2024/perjalanan-menuju-oscp/index.md": {
	id: "2024/perjalanan-menuju-oscp/index.md";
  slug: "perjalanan-menuju-oscp";
  body: string;
  collection: "notes";
  data: any
} & { render(): Render[".md"] };
"2024/untuk-kamu-yang-berusia-20an/index.md": {
	id: "2024/untuk-kamu-yang-berusia-20an/index.md";
  slug: "untuk-kamu-yang-berusia-20an";
  body: string;
  collection: "notes";
  data: any
} & { render(): Render[".md"] };
};
"writeups": {
"2026/de-masking-the-stars/index.mdx": {
	id: "2026/de-masking-the-stars/index.mdx";
  slug: "de-masking-the-stars";
  body: string;
  collection: "writeups";
  data: InferEntrySchema<"writeups">
} & { render(): Render[".mdx"] };
"hackthebox-bashed/index.md": {
	id: "hackthebox-bashed/index.md";
  slug: "htb-bashed";
  body: string;
  collection: "writeups";
  data: InferEntrySchema<"writeups">
} & { render(): Render[".md"] };
"writeup-dctf-2021/index.md": {
	id: "writeup-dctf-2021/index.md";
  slug: "writeup-dctf-2021";
  body: string;
  collection: "writeups";
  data: InferEntrySchema<"writeups">
} & { render(): Render[".md"] };
"writeup-kualifikasi-ctf-hackfest-0x04-web-hacking/index.md": {
	id: "writeup-kualifikasi-ctf-hackfest-0x04-web-hacking/index.md";
  slug: "writeup-kualifikasi-ctf-hackfest-0x04-web-hacking";
  body: string;
  collection: "writeups";
  data: InferEntrySchema<"writeups">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
