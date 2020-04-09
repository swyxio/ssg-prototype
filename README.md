The primary way `ssg` will work:

## During BUILD

1. readSiteInfo - from config - POJO
2. createMarkdownIndex - zero config - an array of markdown
3. createDataIndex - from config - POJO
4. readSrcRoutes - from filesystem - array of svelte files
5. readOldManifest - from cache - Map<path, data+getslice> (validateOldManifest?)
6. createRoutes - from config - Map<path, data+getslice>
7. generateManifest - zero config
8. diffManifests - zero config - Map<path, data+getslice>
   - PLAN stops here
9. buildFiles - zero config - generate Files
   - execute getDataSlice and append to index
   - not necessarily HTML -> JS, CSS and JSON
10. postBuild - from config - pass index, output
    - FullData => RSS
    - Serverside Redirects?

--checkPlan flag

## During DEV

1. readSiteInfo - from config - POJO
2. createMarkdownIndex - zero config - an array of markdown
3. createDataIndex - from config - POJO
4. readSrcRoutes - from filesystem - array of svelte files
5. createRoutes - from config - Map<path, data+getslice>
6. generateManifest - zero config
7. servePath - zero config - generate Files
   - execute getDataSlice and append to index
   - not necessarily HTML -> JS, CSS and JSON

Concepts:

- Site global info is readable anywhere. changing it forces complete rebuild.
- We break up data fetching into (cheap) data index and (expensive) data slices. We memoize data slice calls and attach them to data Index in a FullData object, with which we can do final builds like for RSS.
- ssg can generate pages, images, and misc files - we just call these "files"
- plugins can: - contribute indexes - map from index they own to files - map from FullData index to files - map from indexes to new index? -> eg how to generate tags/categories
- themes - fallback files

Features to design for:

- swappable themes
- shadowed/eject templates and webpack config
- We want programmatic page creation
- We want incremental builds
- We want a nice dev mode
- We want redirects -> clientside as well as serverside
- We want typescript/postprocessing/postcss
- We want RSS (dataslices)
- we can stop and rerun any stages if misconfigured
- REPL for data
- Filesystem routing
- postprocessing step - generate tags page, generate links per page

Nonfeatures:

- No js in main page - just has mount points for svelte
- No clientside routing
- No functions/api routes
- No plugins
