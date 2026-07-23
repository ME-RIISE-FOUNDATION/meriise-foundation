# Task: Add New Past Session - Latest Alumni Talk (Above Current)

## Objective
Add a new "Past Session / Latest Alumni Talk" section ABOVE the existing Nagashankar video section with Devananda Jayaraman's alumni talk.

## Content Details
- **Speaker**: Devananda Jayaraman (Distinguished MCE Alumnus - 1992 E&C)
- **Topic**: Engineering at Airtable
- **Video ID**: `Zt2nXZg68OY`
- **YouTube URL**: https://www.youtube.com/embed/Zt2nXZg68OY
- **Thumbnail**: Use the Airtable/Devananda event poster image

## Changes Needed
1. **Add new Past Session section** BEFORE line 105 (above current Nagashankar section):
   - Create new `<section class="section section--latest">` with title "Latest Alumni Talk"
   - Add iframe with video ID `Zt2nXZg68OY`
   - Add video cover with thumbnail image
   - Keep same structure as existing section for consistency

2. **Positioning**: Insert new section before the current section--latest div (before line 105)

## Rollout Steps
1. Add new Past Session section with Devananda Jayaraman video
2. Test embedded video loads correctly
3. Verify layout/styling is consistent
4. Commit changes
