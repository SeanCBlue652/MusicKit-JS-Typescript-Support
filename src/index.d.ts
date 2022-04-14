export interface MusicKit {
    
    appConfiguration: AppConfiguration;

    formattedPlaybackDuration: FormattedPlaybackDuration;

    embedOptions: EmbedOptions;

    errors: MKError[];

    version: string;

    authStatus: AuthStatus;

    configuration: Configuration;
    /**
     * Configure a MusicKit instance.
     */
    configure(configuration: Configuration): MusicKitInstance;
    /**
     * Returns the configured MusicKit instance.
     */
    getInstance(): MusicKitInstance;
    /**
     * Returns a formatted artwork URL.
     *
     * @param artwork An artwork resource object.
     * @param height The desired artwork height.
     * @param width the desired artwork width.
     */
    formatArtworkURL(artwork: Artwork, height: number, width: number): string;
    /**
     * Returns an object with milliseconds formatted into hours and minutes.
     */
    formattedMilliseconds(milliseconds: number): FormattedPlaybackDuration;
    /**
     * Returns an object with seconds formatted into hours and minutes.
     */
    formattedSeconds(seconds: number): FormattedPlaybackDuration;
    /**
     * Generates Apple Music web player markup.
     *
     * @param url The iTunes URL for the Apple Music content.
     * @param options The object containing the height and width of the player.
     */
    generateEmbedCode(url: string, options: EmbedOptions): string;

    formatMediaTime(seconds: number, separator: string): string;

    /**
        * Fetch a curator using its identifier.
        *
        * @param id A curator identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    curator(id: string, parameters?: QueryParameters): Promise<Curators>;
    /**
        * Fetch one or more curators using their identifiers.
        *
        * @param ids An array of curator identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    curators(ids: string[], parameters?: QueryParameters): Promise<Curators[]>;
    /**
        * Fetch a genre using its identifier.
        *
        * @param id An array of
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    genre(id: string, parameters?: QueryParameters): Promise<Genres>;
    /**
        * Fetch one or more genres using their identifiers.
        *
        * @param ids An array of genre identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    genres(ids: string[], parameters?: QueryParameters): Promise<Genres[]>;
    /**
        * Fetch the resources in heavy rotation for the user.
        *
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        * https://developer.apple.com/documentation/applemusicapi/paginatedresourcecollectionresponse
        */
    historyHeavyRotation(parameters?: QueryParameters): Promise<{
        next?: string;
        data: Resource[];
    }>;
    /**
        * Fetch a music video using its identifier.
        *
        * @param id An array of video identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    musicVideo(id: string, parameters?: QueryParameters): Promise<MusicVideos>;
    /**
        * Fetch one or more music videos using their identifiers.
        *
        * @param ids An array of music video identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    musicVideos(ids: string[], parameters?: QueryParameters): Promise<MusicVideos[]>;
    /**
        * Fetch a playlist using its identifier.
        *
        * @param id A playlist identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    playlist(id: string, parameters?: QueryParameters): Promise<Playlists>;
    /**
        * Fetch one or more playlists using their identifiers.
        *
        * @param ids An array of playlist identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    playlists(ids: string[], parameters?: QueryParameters): Promise<Playlists[]>;
    /**
        * Fetch the recently played resources for the user.
        *
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    recentPlayed(parameters?: QueryParameters): Promise<Resource[]>;
    /**
        * Fetch a recommendation using its identifier.
        *
        * @param id A recommendation identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    recommendation(id: string, parameters?: QueryParameters): Promise<PersonalRecommendation>;
    /**
        * Fetch one or more recommendations using their identifiers.
        *
        * @param ids An array of recommendation identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    recommendations(ids: string[], parameters?: QueryParameters): Promise<PersonalRecommendation[]>;

    /**
        * Search the catalog using a query.
        *
        * @param term The term to search.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        * https://developer.apple.com/documentation/applemusicapi/searchresponse
        */
    search(
        term: string,
        parameters?: QueryParameters,
    ): Promise<{
        results: {
            activities?: SearchResult<Activities>;
            albums?: SearchResult<Albums>;
            'apple-curators'?: SearchResult<AppleCurators>;
            artists?: SearchResult<Artists>;
            curators?: SearchResult<Curators>;
            'music-videos'?: SearchResult<MusicVideos>;
            playlists?: SearchResult<Playlists>;
            'record-labels'?: SearchResult<RecordLabels>;
            stations?: SearchResult<Stations>;
            songs?: SearchResult<Songs>;
            top?: {
                data: Array<
                    | Activities
                    | Albums
                    | AppleCurators
                    | Artists
                    | Curators
                    | MusicVideos
                    | Playlists
                    | RecordLabels
                    | Songs
                    | Stations
                >;
            };
        };
    }>;
    /**
        * Fetch the search term results for a hint.
        *
        * @param term The term to search.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse
        */
    searchHints(
        term: string,
        parameters?: QueryParameters,
    ): Promise<{
        results: {
            terms: string[];
        };
    }>;
    /**
        * Fetch a song using its identifier.
        *
        * @param ids An array of identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    song(id: string, parameters?: QueryParameters): Promise<Songs>;
    /**
        * Fetch one or more songs using their identifiers.
        *
        * @param ids An array of song identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    songs(ids: string[], parameters?: QueryParameters): Promise<Songs[]>;
    /**
        * Fetch a station using its identifier.
        *
        * @param id A station identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    station(id: string, parameters?: QueryParameters): Promise<Stations>;
    /**
        * Fetch one or more stations using their identifiers.
        *
        * @param ids An array of station identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    stations(ids: string[], parameters?: QueryParameters): Promise<Stations[]>;
    /**
        * Fetch a storefront using its identifier.
        *
        * @param id A storefront identifier.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    storefront(id: string, parameters?: QueryParameters): Promise<Storefronts>;
    /**
        * Fetch one or more storefronts using their identifiers.
        *
        * @param ids An array of storefront identifiers.
        * @param parameters A query parameters object that is serialized and passed
        * directly to the Apple Music API.
        */
    storefronts(ids: string[], parameters?: QueryParameters): Promise<Storefronts[]>;
}


/**
     * A configuration for an app.
     */
export interface AppConfiguration {
    /**
     * The build number of your app.
     */
    build?: string | undefined;
    /**
     * A URL for your app icon.
     */
    icon?: string | undefined;
    /**
     * The name of your app.
     */
    name?: string | undefined;
    /**
     * The version of your app.
     */
    version?: string | undefined;
}

export interface FormattedPlaybackDuration {
    hours: number;
    minutes: number;
}

export interface EmbedOptions {
    height: number | string;
    width: number | string;
}

export interface AuthStatus {
    NOT_DETERMINED: 0;
    DENIED: 1;
    RESTRICTED: 2;
    AUTHORIZED: 3;
}

/**
     * A dictionary of configuration options for the MusicKit instance.
     */
export interface Configuration {
    /**
     * The version of your app.
     */
    app?: AppConfiguration | undefined;
    /**
     * This property indicates whether you have explicitly enabled or disabled
     * declarative markup.
     */
    declarativeMarkup?: boolean | undefined;
    /**
     * The developer token to identify yourself as a trusted developer and
     * member of the Apple Developer Program.
     */
    developerToken?: string | undefined;
    /**
     * The current storefront for this MusicKit configuration.
     */
    storefrontId?: string | undefined;
    /**
     * The playback bit rate of the music player.
     */
    bitrate?: PlaybackBitrate | undefined;
}

    /**
     * An object that represents a unique identifier for a music item.
     * https://developer.apple.com/documentation/musickit/musicitemid
     */
    export type MusicItemID = string;

        /**
         * The rating of the content that potentially plays while playing a resource.
         * A nil value means no rating is available for this resource.
         * https://developer.apple.com/documentation/musickit/contentrating
         */
        export type ContentRating = 'clean' | 'explicit' | null;
    
        /**
         * A to-one or to-many relationship from one resource object to others.
         * https://developer.apple.com/documentation/applemusicapi/relationship
         */
        export interface Relationship<Data> {
            href?: string;
            next?: string;
            data: Data[];
            meta?: Record<string, any>;
        }
    
        /**
         * A to-one or to-many relationship view from one resource object to others representing interesting associations.
         * https://developer.apple.com/documentation/applemusicapi/view
         */
        export interface View<Data> {
            href?: string;
            next?: string;
            attributes?: {
                title: string;
            };
            data: Data[];
            meta?: Record<string, any>;
        }
    
        /**
         * A resource—such as an album, song, or playlist.
         * https://developer.apple.com/documentation/applemusicapi/resource
         */
        export interface Resource {
            id: string;
            type: string;
            href: string;
            attributes?: Record<string, any>;
            relationships?: Record<string, Relationship<Resource> | Array<Relationship<Resource>>>;
            meta?: Record<string, any>;
            views?: Record<string, View<Resource>>;
        }
    
        /**
         * A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.
         * https://developer.apple.com/documentation/applemusicapi/storefronts
         */
        export interface Storefronts extends Resource {
            type: 'storefronts';
            attributes?: {
                defaultLanguageTag: string;
                explicitContentPolicy: 'allowed' | 'opt-in' | 'prohibited';
                name: string;
                supportedLanguageTags: string[];
            };
        }
    
        /**
         * A resource object that represents a music genre.
         * https://developer.apple.com/documentation/applemusicapi/genres
         */
        export interface Genres extends Resource {
            type: 'genres';
            attributes?: {
                name: string;
                parentId?: string;
                parentName?: string;
            };
        }
    
        /**
         * A resource object that represents a song.
         * https://developer.apple.com/documentation/applemusicapi/songs-um8
         */
        export interface Songs extends Resource {
            id: MusicItemID;
            type: 'songs';
            attributes?: {
                albumName: string;
                artistName: string;
                artwork: Artwork;
                attribution?: string;
                composerName?: string;
                contentRating?: ContentRating;
                discNumber?: number;
                durationInMillis: number;
                editorialNotes?: EditorialNotes;
                genreNames: string[];
                hasLyrics: boolean;
                isrc?: string;
                movementCount?: number;
                movementName?: string;
                movementNumber?: number;
                name: string;
                playParams?: PlayParameters;
                previews: Preview[];
                releaseDate?: string;
                trackNumber?: number;
                url: string;
                workName?: string;
                artistUrl?: string;
            };
            relationships: {
                albums: Relationship<Albums>;
                artists: Relationship<Artists>;
                genres: Relationship<Genres>;
                station: Relationship<Stations>;
                composers: Relationship<Artists>;
                library: Relationship<LibraryAlbums>;
                'music-videos': Relationship<MusicVideos>;
            };
        }
    
        /**
         * A resource object that represents a music video.
         * https://developer.apple.com/documentation/applemusicapi/musicvideos/
         */
        export interface MusicVideos extends Resource {
            id: MusicItemID;
            type: 'music-videos';
            attributes?: {
                albumName?: string;
                artistName: string;
                artwork: Artwork;
                contentRating?: ContentRating;
                durationInMillis: number;
                editorialNotes?: EditorialNotes;
                genreNames: string[];
                has4K: boolean;
                hasHDR: boolean;
                isrc?: string;
                name: string;
                playParams?: PlayParameters;
                previews: Preview[];
                releaseDate?: string;
                trackNumber?: number;
                url: string;
                videoSubType?: 'preview';
                workId?: string;
                workName?: string;
                artistUrl?: string;
            };
            relationships: {
                albums: Relationship<Albums>;
                genres: Relationship<Genres>;
                library: Relationship<LibraryAlbums>;
                songs: Relationship<Songs>;
            };
            views: {
                'more-by-artist': View<MusicVideos>;
                'more-in-genre': View<MusicVideos>;
            };
        }
    
        /**
         * A resource object that represents an Apple curator.
         * https://developer.apple.com/documentation/applemusicapi/applecurators/
         */
        export interface AppleCurators extends Resource {
            type: 'apple-curators';
            attributes?: {
                artwork: Artwork;
                editorialNotes?: EditorialNotes;
                kind: 'Curator' | 'Genre' | 'Show';
                name: string;
                shortName?: string;
                showHostName?: string;
                url: string;
            };
            relationships: {
                playlists: Relationship<Playlists>;
            };
        }
    
        /**
         * A resource object that represents a curator.
         * https://developer.apple.com/documentation/applemusicapi/curators-uja
         */
        export interface Curators extends Resource {
            type: 'curators';
            attributes?: {
                artwork: Artwork;
                editorialNotes?: EditorialNotes;
                name: string;
                url: string;
            };
            relationships: {
                playlists: Relationship<Playlists>;
            };
        }
    
        /**
         * A resource object that represents a station.
         * https://developer.apple.com/documentation/applemusicapi/stations/
         */
        export interface Stations extends Resource {
            type: 'stations';
            attributes?: {
                artwork: Artwork;
                durationInMillis: number;
                editorialNotes: EditorialNotes;
                episodeNumber: number;
                contentRating?: ContentRating;
                isLive: boolean;
                name: string;
                playParams: PlayParameters;
                stationProviderName: string;
                url: string;
            };
        }
    
        /**
         * A resource object that represents a record label.
         * https://developer.apple.com/documentation/applemusicapi/recordlabels/
         */
        export interface RecordLabels extends Resource {
            id: MusicItemID;
            type: 'record-labels';
            attributes?: {
                artwork: Artwork;
                description: DescriptionAttribute;
                name: string;
                url: string;
            };
            views: {
                'latest-releases': View<Albums>;
                'top-releases': View<Albums>;
            };
        }
    
        /**
         * A resource object that represents an album.
         * https://developer.apple.com/documentation/applemusicapi/albums-uib
         */
        export interface Albums extends Resource {
            type: 'albums';
            attributes?: {
                artistName: string;
                artistUrl?: string;
                artwork: Artwork;
                contentRating?: ContentRating;
                Possible?: ContentRating;
                copyright?: string;
                editorialNotes?: EditorialNotes;
                genreNames: string[];
                isCompilation: boolean;
                isComplete: boolean;
                isMasteredForItunes: boolean;
                isSingle: boolean;
                name: string;
                playParams?: PlayParameters;
                recordLabel?: string;
                releaseDate?: string;
                trackCount: number;
                upc?: string;
                url: string;
            };
            relationships: {
                artists: Relationship<Artists>;
                genres: Relationship<Genres>;
                tracks: Relationship<MusicVideos | Songs>;
                library: Relationship<LibraryAlbums>;
                'record-labels': Relationship<RecordLabels>;
            };
            views: {
                'appears-on': View<Playlists>;
                'other-versions': View<Albums>;
                'related-albums': View<Albums>;
                'related-videos': View<MusicVideos>;
            };
        }
    
        /**
         * A resource object that represents a library album.
         * https://developer.apple.com/documentation/applemusicapi/libraryalbums/
         */
        export interface LibraryAlbums extends Resource {
            type: 'library-albums';
            attributes?: {
                artistName: string;
                artwork: Artwork;
                contentRating?: ContentRating;
                dateAdded?: string;
                name: string;
                playParams?: PlayParameters;
                releaseDate?: string;
                trackCount: number;
                genreNames: string[];
            };
            relationships: {
                artists: Relationship<Artists>;
                catalog: Relationship<Playlists>;
                tracks: Relationship<MusicVideos | Songs>;
            };
        }
    
        /**
         * A resource object that represents a library playlist.
         * https://developer.apple.com/documentation/applemusicapi/libraryplaylists/
         */
        export interface LibraryPlaylists extends Resource {
            type: 'library-playlists';
            attributes?: {
                artwork?: Artwork;
                canEdit: boolean;
                dateAdded?: string;
                description?: DescriptionAttribute;
                hasCatalog: boolean;
                name: string;
                playParams?: PlayParameters;
            };
            relationships: {
                catalog: Relationship<Playlists>;
                tracks: Relationship<MusicVideos | Songs>;
            };
        }
    
        /**
         * A resource object that represents an artist of an album where an artist can be one or more persons.
         * https://developer.apple.com/documentation/applemusicapi/artists-uip
         */
        export interface Artists extends Resource {
            type: 'artists';
            attributes?: {
                editorialNotes?: EditorialNotes;
                genreNames: string[];
                name: string;
                url: string;
            };
            relationships: {
                albums: Relationship<Albums>;
                genres: Relationship<Genres>;
                'music-videos': Relationship<MusicVideos>;
                playlists: Relationship<Playlists>;
                station: Relationship<Stations>;
            };
            views: {
                'appears-on-albums': View<Albums>;
                'compilation-albums': {
                    href?: string;
                    next?: string;
                    attributes: {
                        title: string;
                    };
                    data: Albums[];
                };
                'featured-albums': View<Albums>;
                'featured-playlists': View<Playlists>;
                'full-albums': View<Albums>;
                'latest-release': View<Albums>;
                'live-albums': View<Albums>;
                'similar-artists': View<Artists>;
                singles: View<Albums>;
                'top-music-videos': View<MusicVideos>;
                'top-songs': View<Songs>;
            };
        }
    
        /**
         * A resource object that represents a playlist.
         * https://developer.apple.com/documentation/applemusicapi/playlists-ulf
         */
        export interface Playlists extends Resource {
            id: MusicItemID;
            type: 'playlists';
            attributes?: {
                artwork?: Artwork;
                curatorName: string;
                description?: DescriptionAttribute;
                isChart: boolean;
                lastModifiedDate?: string;
                name: string;
                playlistType: 'editorial' | 'external' | 'personal-mix' | 'replay' | 'user-shared';
                url: string;
                trackTypes: Array<'music-videos' | 'songs'>;
            };
            relationships: {
                curator: Relationship<Activities | AppleCurators | Curators>;
                library: Relationship<LibraryPlaylists>;
                tracks: Relationship<MusicVideos | Songs>;
            };
            views: {
                'featured-artists': View<Artists>;
                'more-by-curator': View<Playlists>;
            };
        }
    
        /**
         * A resource object that represents an activity curator.
         * https://developer.apple.com/documentation/applemusicapi/activities-ui5
         */
        export interface Activities extends Resource {
            type: 'activities';
            attributes?: {
                artwork: Artwork;
                editorialNotes?: EditorialNotes;
                name: string;
                url: string;
            };
            relationships: {
                playlists: Relationship<Playlists>;
            };
        }
    
        /**
         * A resource object that represents recommended resources for a user calculated using their selected preferences.
         * https://developer.apple.com/documentation/applemusicapi/personalrecommendation
         */
        export interface PersonalRecommendation extends Resource {
            type: 'personal-recommendation';
            attributes?: {
                kind: 'music-recommendations' | 'recently-played' | 'unknown';
                nextUpdateDate: string;
                reason: {
                    stringForDisplay: string;
                };
                resourceTypes: string[];
                title: {
                    stringForDisplay: string;
                };
            };
            relationships?: {
                contents: Array<Relationship<Resource>>;
            };
        }
        export interface PlayParameters {
            id: string;
            kind: string;
        }
    
        /**
         * An object that represents editorial notes.
         * https://developer.apple.com/documentation/musickit/editorialnotes
         */
        export interface EditorialNotes {
            hashValue: number;
            name?: string;
            short?: string;
            standard?: string;
            tagline?: string;
        }
    
        /**
         * An object that represents artwork for a music item.
         * https://developer.apple.com/documentation/musickit/artwork
         */
        export interface Artwork {
            bgColor: string;
            height: number;
            width: number;
            textColor1: string;
            textColor2: string;
            textColor3: string;
            textColor4: string;
            url: string;
        }
    
        /**
         * An object that represents a preview for resources.
         * https://developer.apple.com/documentation/applemusicapi/preview
         */
        export interface Preview {
            artwork: Artwork;
            url: string;
            hlsUrl: string;
        }
    
        /**
         * An object that represents a description attribute.
         * https://developer.apple.com/documentation/applemusicapi/descriptionattribute/
         */
        export interface DescriptionAttribute {
            short: string;
            standard: string;
        }
    
        export interface SearchResult<T> {
            data: T[];
            href?: string;
            next?: string;
        }
    
        export interface SearchChartResult<T> {
            chart: string;
            data: T[];
            href?: string;
            name: string;
            next?: string;
        }
    
       export type QueryParameters = Record<string, any>;
    
        /**
         * This class represents the Apple Music API.
         */
        export interface API {
            /**
             * An instance of the Cloud library.
             */
            library: Library;
            /**
             * The storefront used for making calls to the API.
             */
            storefrontId: string;
            /**
             * Fetch one or more activities using their identifiers.
             *
             * @param ids An array of activity identifiers.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            activities(ids: string[], parameters?: QueryParameters): Promise<Activities[]>;
            /**
             * Fetch an activity using its identifier.
             *
             * @param id An activity identifier.
             * @param parameters A query params object that is serialized and passed
             * directly to the Apple Music API.
             */
            activity(id: string, parameters?: QueryParameters): Promise<Activities>;
            /**
             * Add a catalog resource to a user's library.
             */
            addToLibrary(parameters?: any): Promise<void>;
            /**
             * Fetch an album using its identifier.
             *
             * @param id An album identifier.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            album(id: string, parameters?: QueryParameters): Promise<Albums>;
            /**
             * Fetch one or more albums using their identifiers.
             *
             * @param ids An array of album identifiers.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            albums(ids: string[], parameters?: QueryParameters): Promise<Albums[]>;
            /**
             * Fetch an Apple curator using its identifier.
             *
             * @param id An Apple curator identifier.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            appleCurator(id: string, parameters?: QueryParameters): Promise<Curators>;
            /**
             * Fetch one or more Apple curators using their identifiers.
             *
             * @param ids An array of Apple curator identifiers.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            appleCurators(ids: string[], parameters?: QueryParameters): Promise<AppleCurators[]>;
            /**
             * Fetch an artist using its identifier.
             *
             * @param id An artist identifier.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            artist(id: string, parameters?: QueryParameters): Promise<Artists>;
            /**
             * Fetch one or more artists using their identifiers.
             *
             * @param ids An array of artist identifiers.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             */
            artists(ids: string[], parameters?: QueryParameters): Promise<Artists[]>;
            /**
             * Fetch one or more charts.
             *
             * @param types An array of chart types.
             * @param parameters A query parameters object that is serialized and passed
             * directly to the Apple Music API.
             * https://developer.apple.com/documentation/applemusicapi/chartresponse
             */
            charts(
                types: string[],
                parameters?: QueryParameters,
            ): Promise<{
                results: {
                    albums: Array<SearchChartResult<Albums>>;
                    'music-videos': Array<SearchChartResult<MusicVideos>>;
                    playlists: Array<SearchChartResult<Playlists>>;
                    songs: Array<SearchChartResult<Songs>>;
                };
            }>;
        }

/**
     * A dictionary containing events for a MusicKit instance.
     */
export interface Events {
    /**
     * A notification name indicating a change in the authorization status.
     */
    authorizationStatusDidChange: { authorizationStatus: AuthStatus[keyof AuthStatus] };
    /**
     * A notification name indicating an upcoming change in the authorization status.
     */
    authorizationStatusWillChange: unknown;
    /**
     * A notification name indicating a user is eligible for a subscribe view.
     */
    eligibleForSubscribeView: unknown;
    /**
     * A notification name indicating MusicKit JS is loaded.
     */
    loaded: unknown;
    /**
     * A notification name indicating the player has obtained enough data for
     * playback to start.
     */
    mediaCanPlay: unknown;
    /**
     * A notification name indicating that the currently-playing media item has
     * changed.
     */
    mediaItemDidChange: unknown;
    /**
     * A notification name indicating the currently-playing media item is about
     * to change.
     */
    mediaItemWillChange: unknown;
    /**
     * A notification name indicating that the player has thrown an error during
     * playback.
     */
    mediaPlaybackError: unknown;
    /**
     * A notification name indicating the media item's metadata has finished
     * loading.
     */
    metadataDidChange: unknown;
    /**
     * A notification indicating the playback bit rate has changed.
     */
    playbackBitrateDidChange: unknown;
    /**
     * A notification name indicating the current playback duration changed.
     */
    playbackDurationDidChange: unknown;
    /**
     * A notification name indicating the current playback progress changed.
     */
    playbackProgressDidChange: { progress: number };
    /**
     * A notification indicating the playback state has changed.
     */
    playbackStateDidChange: { oldState: PlaybackState; state: PlaybackState };
    /**
     * A notification indicating the playback state is about to be changed.
     */
    playbackStateWillChange: unknown;
    /**
     * A notification indicating that a playback target's availability has changed.
     */
    playbackTargetAvailableDidChange: unknown;
    /**
     * A notification name indicating the current playback time has changed.
     */
    playbackTimeDidChange: unknown;
    /**
     * A notification name indicating the player volume has changed.
     */
    playbackVolumeDidChange: unknown;
    /**
     * A notification name indicating the playback has started in another context
     * on your domain, and the current player has stopped playback.
     */
    primaryPlayerDidChange: unknown;
    /**
     * A notification name indicating that the items in the current playback
     * queue have changed.
     */
    queueItemsDidChange: unknown;
    /**
     * A notification name indicating that the current queue position has changed.
     */
    queuePositionDidChange: unknown;
    /**
     * A notification name indicating a change in the storefront country code.
     */
    storefrontCountryCodeDidChange: unknown;
    /**
     * A notification name indicating that the device's inferred storefront
     * identifier changed.
     */
    storefrontIdentifierDidChange: unknown;
    /**
     * A notification name indicating the user token changed.
     */
    userTokenDidChange: unknown;
}

 /**
     * This class represents a user's Cloud Library.
     */
 export interface Library {
    /**
     * Fetch a library album using its identifier.
     *
     * @param id A library album identifier
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001494-albums
     */
    album(id: string, parameters?: QueryParameters): Promise<Albums>;
    /**
     * Fetch one or more library albums using their identifiers.
     *
     * @param ids An array of library album identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001494-albums
     */
    albums(ids: string[] | null, parameters?: QueryParameters): Promise<Albums[]>;
    /**
     * Fetch a library artist using its identifier.
     *
     * @param id A library artist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001495-artist
     */
    artist(id: string, parameters?: QueryParameters): Promise<Artists>;
    /**
     * Fetch one or more library artists using their identifiers.
     *
     * @param ids An array of library artist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001496-artists
     */
    artists(ids: string[] | null, parameters?: QueryParameters): Promise<Artists[]>;
    /**
     * Fetch a library music video using its identifier.
     *
     * @param id A library music video identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001497-musicvideo
     */
    musicVideo(id: string, parameters?: QueryParameters): Promise<MusicVideos>;
    /**
     * Fetch one or more library music videos using their identifiers.
     *
     * @param ids An array of library music video identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001498-musicvideos
     */
    musicVideos(ids: string[] | null, parameters?: QueryParameters): Promise<MusicVideos[]>;
    /**
     * Fetch a library playlist using its identifier.
     *
     * @param id A library playlist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001499-playlist
     */
    playlist(id: string, parameters?: QueryParameters): Promise<Playlists>;
    /**
     * Fetch one or more library playlists using their identifiers.
     *
     * @param ids An array of library playlist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001500-playlists
     */
    playlists(ids: string[] | null, parameters?: QueryParameters): Promise<Playlists[]>;
    /**
     * Search the library using a query.
     *
     * @param term The term to search.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3002049-search
     */
    search(term: string, parameters?: QueryParameters): Promise<Resource[]>;
    /**
     * Fetch a library song using its identifier.
     *
     * @param id A library song identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001501-song
     */
    song(id: string, parameters?: QueryParameters): Promise<Songs>;
    /**
     * Fetch one or more library songs using their identifiers.
     *
     * @param ids An array of library song identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Cloud Library API.
     * https://developer.apple.com/documentation/musickitjs/musickit/library/3001502-songs
     */
    songs(ids: string[] | null, parameters?: QueryParameters): Promise<Songs[]>;
}

/**
     * The options to use when defining a media item.
     */
export interface MediaItemOptions {
    /**
     * The attributes for the media item.
     */
    attributes?: any;
    /**
     * The identifier for the media item.
     */
    id?: string | undefined;
    /**
     * The type for the media item.
     */
    type?: any;
}

/**
 * This property describes a media item.
 */
export type Descriptor = MediaItem | string;

/**
 * This class represents a single media item.
 */
export class MediaItem {
    /**
     * A constructor that creates a new media item from specified options.
     */
    constructor(options?: MediaItemOptions);
    /**
     * Prepares a media item for playback.
     */
    prepareToPlay(): Promise<void>;
    /**
     * A string of information about the album.
     */
    readonly albumInfo: string;
    /**
     * The title of the album.
     */
    readonly albumName: string;
    /**
     * The artist for a media item.
     */
    readonly artistName: string;
    /**
     * The artwork object for the media item.
     */
    readonly artwork: Artwork;
    /**
     * The artwork image for the media item.
     */
    readonly artworkURL: string;
    /**
     * The attributes object for the media item.
     */
    readonly attributes: any;
    /**
     * A string containing the content rating for the media item.
     */
    readonly contentRating: string;
    /**
     * The disc number where the media item appears.
     */
    readonly discNumber: number;
    /**
     * The identifier for the media item.
     */
    readonly id: string;
    /**
     * A string of common information about the media item.
     */
    readonly info: string;
    /**
     * A Boolean value that indicates whether the item has explicit lyrics or language.
     */
    readonly isExplicitItem: boolean;
    /**
     * A Boolean value that indicated whether the item is playable.
     */
    readonly isPlayable: boolean;
    /**
     * A Boolean value indicating whether the media item is prepared to play.
     */
    readonly isPreparedToPlay: boolean;
    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    readonly isrc: string;
    /**
     * The playback duration of the media item.
     */
    readonly playbackDuration: number;
    readonly playlistArtworkURL: string;
    readonly playlistName: string;
    /**
     * The URL to an unencrypted preview of the media item.
     */
    readonly previewURL: string;
    /**
     * The release date of the media item.
     */
    readonly releaseDate?: Date | undefined;
    /**
     * The name of the media item.
     */
    readonly title: string;
    /**
     * The number of the media item in the album's track list.
     */
    readonly trackNumber: number;
    /**
     * The type of the media item.
     */
    type: any;
}

/**
     * A class that describes an error that may occur when using MusicKit JS,
     * including server and local errors.
     */
export class MKError extends Error {
    /**
     * The error code for this error.
     */
    errorCode: string;
    /**
     * A description of the error that occurred.
     */
    description?: string | undefined;
    /**
     * Error code indicating that you don't have permission to access the
     * endpoint, media item, or content.
     */
    static ACCESS_DENIED: string;
    /**
     * Error code indicating the authorization was rejected.
     */
    static AUTHORIZATION_ERROR: string;
    /**
     * Error code indicating a MusicKit JS configuration error.
     */
    static CONFIGURATION_ERROR: string;
    /**
     * Error code indicating you don't have permission to access this content,
     * due to content restrictions.
     */
    static CONTENT_RESTRICTED: string;
    /**
     * Error code indicating the parameters provided for this method are invalid.
     */
    static INVALID_ARGUMENTS: string;
    /**
     * Error code indicating that the VM certificate could not be applied.
     */
    static MEDIA_CERTIFICATE: string;
    /**
     * Error code indicating that the media item descriptor is invalid.
     */
    static MEDIA_DESCRIPTOR: string;
    /**
     * Error code indicating that a DRM key could not be generated.
     */
    static MEDIA_KEY: string;
    /**
     * Error code indicating a DRM license error.
     */
    static MEDIA_LICENSE: string;
    /**
     * Error code indicating a media playback error.
     */
    static MEDIA_PLAYBACK: string;
    /**
     * Error code indicating that an EME session could not be created.
     */
    static MEDIA_SESSION: string;
    /**
     * Error code indicating a network error.
     */
    static NETWORK_ERROR: string;
    /**
     * Error code indicating that the resource was not found.
     */
    static NOT_FOUND: string;
    /**
     * Error code indicating that you have exceeded the Apple Music API quota.
     */
    static QUOTA_EXCEEDED: string;
    static SERVER_ERROR: string;
    /**
     * Error code indicating the MusicKit service could not be reached.
     */
    static SERVICE_UNAVAILABLE: string;
    /**
     * Error code indicating that the user's Apple Music subscription has expired.
     */
    static SUBSCRIPTION_ERROR: string;
    /**
     * Error code indicating an unknown error.
     */
    static UNKNOWN_ERROR: string;
    /**
     * Error code indicating that the operation is not supported.
     */
    static UNSUPPORTED_ERROR: string;
}
/**
     * This object provides access to a player instance, and through the player
     * instance, access to control playback.
     */
export interface MusicKitInstance {
    /**
     * An instance of the MusicKit API.
     */
    readonly api: API;
    /**
     * An instance of the MusicKit API.
     */
    readonly bitrate: PlaybackBitrate;
    /**
     * The developer token to identify yourself as a trusted developer and
     * member of the Apple Developer Program.
     */
    readonly developerToken: string;
    /**
     * A Boolean value indicating whether the user has authenticated and
     * authorized the application for use.
     */
    readonly isAuthorized: boolean;
    /**
     * A user token used to access personalized Apple Music content.
     */
    readonly musicUserToken: string;
    /**
     * The current playback state of the music player.
     */
    readonly playbackState: PlaybackState;
    /**
     * A Boolean value that indicates if a playback target is available.
     */
    readonly playbackTargetAvailable: boolean;
    /**
     * An instance of the MusicKit player.
     */
    readonly player: Player;
    /**
     * The current storefront for the configured MusicKit instance.
     */
    readonly storefrontId: string;
    /**
     * Add an event listener for a MusicKit instance by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to invoke when the event occurs.
     */
    addEventListener<T extends keyof Events>(name: T, callback: (event: Events[T]) => any): void;
    /**
     * No description available.
     */
    addToLibrary(id: any, type: any): Promise<any>;
    /**
     * Returns a promise containing a music user token when a user has
     * authenticated and authorized the app.
     */
    authorize(): Promise<string>;
    /**
     * Begins playing the media item at the specified index in the queue.
     *
     * @param index The queue index to begin playing media.
     */
    changeToMediaAtIndex(index: number): Promise<number>;
    /**
     * Pauses playback of the media player.
     */
    pause(): void;
    /**
     * Begins playback of the current media item.
     */
    play(): Promise<MediaItemPosition>;
    /**
     * No description available.
     */
    playLater(options: SetQueueOptions): Promise<void>;
    /**
     * No description available.
     */
    playNext(options: SetQueueOptions): Promise<void>;
    /**
     * Removes an event listener for a MusicKit instance by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to remove.
     */
    removeEventListener(name: string, callback?: () => any): void;
    /**
     * Sets the playback point to a specified time.
     *
     * @param time The time to set as the playback point.
     */
    seekToTime(time: number): Promise<any>;
    /**
     * Sets a music player's playback queue using queue options.
     *
     * @param options The option used to set the playback queue.
     */
    setQueue(options: SetQueueOptions): Promise<Queue>;
    /**
     * Starts playback of the next media item in the playback queue.
     */
    skipToNextItem(): Promise<MediaItemPosition>;
    /**
     * Starts playback of the previous media item in the playback queue.
     */
    skipToPreviousItem(): Promise<MediaItemPosition>;
    /**
     * Stops playback of the media player.
     */
    stop(): void;
    /**
     * Unauthorizes the app for the current user.
     */
    unauthorize(): Promise<any>;
}

/**
     * The playback states of the music player.
     */
export enum PlaybackState {
    NONE,
    LOADING,
    PLAYING,
    PAUSED,
    STOPPED,
    ENDED,
    SEEKING,
    waiting,
    stalled,
    completed,
}

/**
 * The playback bit rate of the music player.
 */
export enum PlaybackBitrate {
    HIGH = 256,
    STANDARD = 64,
}

export type PlayerRepeatMode = 0 | 1 | 2;
export type PlayerShuffleMode = 0 | 1;
export type MediaItemPosition = number;

/**
 * A media player that represents the media player for a MusicKit instance.
 */
export interface Player {
    /**
     * The current bit rate of the music player.
     */
    readonly bitrate: number;
    /**
     * The music player has EME loaded.
     */
    readonly canSupportDRM: boolean;
    /**
     * The current playback duration.
     */
    readonly currentPlaybackDuration: number;
    /**
     * The current playback progress.
     */
    readonly currentPlaybackProgress: number;
    /**
     * The current position of the playhead.
     */
    readonly currentPlaybackTime: number;
    /**
     * No description available.
     */
    readonly currentPlaybackTimeRemaining: number;
    /**
     * The current playback duration in hours and minutes.
     */
    readonly formattedCurrentPlaybackDuration: FormattedPlaybackDuration;
    /**
     * A Boolean value indicating whether the player is currently playing.
     */
    readonly isPlaying: boolean;
    /**
     * The currently-playing media item, or the media item, within an queue,
     * that you have designated to begin playback.
     */
    readonly nowPlayingItem: MediaItem;
    /**
     * The index of the now playing item in the current playback queue.
     */
    readonly nowPlayingItemIndex?: number | undefined;
    /**
     * The current playback rate for the player.
     */
    readonly playbackRate: number;
    /**
     * The current playback state of the music player.
     */
    readonly playbackState: PlaybackState;
    /**
     * A Boolean value that indicates whether a playback target is available.
     */
    readonly playbackTargetAvailable?: boolean | undefined;
    /**
     * The current playback queue of the music player.
     */
    readonly queue: Queue;
    /**
     * The current repeat mode of the music player.
     */
    repeatMode: PlayerRepeatMode;
    /**
     * The current shuffle mode of the music player.
     */
    shuffleMode: PlayerShuffleMode;
    /**
     * A number indicating the current volume of the music player.
     */
    volume: number;
    /**
     * Adds an event listener as a callback for an event name.
     *
     * @param name The name of the event.
     * @param callback The callback function to invoke when the event occurs.
     */
    addEventListener(name: string, callback: () => any): void;
    /**
     * Begins playing the media item at the specified index in the queue immediately.
     *
     * @param The queue index to begin playing media.
     */
    changeToMediaAtIndex(index: number): Promise<MediaItemPosition>;
    /**
     * Begins playing the media item in the queue immediately.
     *
     * @param descriptor descriptor can be a MusicKit.MediaItem instance or a
     * string identifier.
     */
    changeToMediaItem(descriptor: Descriptor): Promise<MediaItemPosition>;
    /**
     * Sets the volume to 0.
     */
    mute(): void;
    /**
     * Pauses playback of the current item.
     */
    pause(): void;
    /**
     * Initiates playback of the current item.
     */
    play(): Promise<MediaItemPosition>;
    /**
     * Prepares a music player for playback.
     *
     * @param descriptor descriptor can be a MusicKit.MediaItem instance or a
     * string identifier.
     */
    prepareToPlay(descriptor: Descriptor): Promise<void>;
    /**
     * No description available.
     *
     * @param name The name of the event.
     * @param callback The callback function to remove.
     */
    removeEventListener(name: string, callback: () => any): void;
    /**
     * Sets the playback point to a specified time.
     *
     * @param time The time to set as the playback point.
     */
    seekToTime(time: number): Promise<void>;
    /**
     * Displays the playback target picker if a playback target is available.
     */
    showPlaybackTargetPicker(): void;
    /**
     * Starts playback of the next media item in the playback queue.
     */
    skipToNextItem(): Promise<MediaItemPosition>;
    /**
     * Starts playback of the previous media item in the playback queue.
     */
    skipToPreviousItem(): Promise<MediaItemPosition>;
    /**
     * Stops the currently playing media item.
     */
    stop(): void;
}

/**
     * An array of media items to be played.
     */
export interface Queue {
    /**
     * A Boolean value indicating whether the queue has no items.
     */
    readonly isEmpty: boolean;
    /**
     * An array of all the media items in the queue.
     */
    readonly items: MediaItem[];
    /**
     * The number of items in the queue.
     */
    readonly length: number;
    /**
     * The next playable media item in the queue.
     */
    readonly nextPlayableItem?: MediaItem | undefined;
    /**
     * The current queue position.
     */
    readonly position: number;
    /**
     * The previous playable media item in the queue.
     */
    readonly previousPlayableItem?: MediaItem | undefined;

    /**
     * Add an event listener for a MusicKit queue by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to remove.
     */
    addEventListener(name: string, callback: () => any): void;
    /**
     * Inserts the media items defined by the queue descriptor after the last
     * media item in the current queue.
     */
    append(descriptor: Descriptor): void;
    /**
     * Returns the index in the playback queue for a media item descriptor.
     *
     * @param descriptor A descriptor can be an instance of the MusicKit.MediaItem
     * class, or a string identifier.
     */
    indexForItem(descriptor: Descriptor): number;
    /**
     * Returns the media item located in the indicated array index.
     */
    item(index: number): MediaItem | null | undefined;
    /**
     * Inserts the media items defined by the queue descriptor into the current
     * queue immediately after the currently playing media item.
     */
    prepend(descriptor: any): void;
    /**
     * Removes an event listener for a MusicKit queue by name.
     *
     * @param name The name of the event.
     * @param callback The callback function to remove.
     */
    removeEventListener(name: string, callback: () => any): void;
}

/**
     * The options to use when setting a music player's playback queue.
     */
export interface SetQueueOptions {
    /**
     * The catalog album used to set a music player's playback queue.
     */
    album?: string | undefined;
    /**
     * The media items used to set a music player's playback queue.
     */
    items?: Descriptor[] | undefined;
    /**
     * The parameters used to set a music player's playback queue.
     */
    parameters?: QueryParameters | undefined;
    /**
     * The playlist used to set a music player's playback queue.
     */
    playlist?: string | undefined;
    /**
     * The song used to set a music player's playback queue.
     */
    song?: string | undefined;
    /**
     * The songs used to set a music player's playback queue.
     */
    songs?: string[] | undefined;
    /**
     * The start position for a set playback queue.
     */
    startPosition?: number | undefined;
    /**
     * A content URL used to set a music player's playback queue.
     */
    url?: string | undefined;
}