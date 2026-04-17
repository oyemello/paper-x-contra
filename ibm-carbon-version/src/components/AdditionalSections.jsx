'use client';

import {
  Grid,
  Column,
  Tile,
  Heading,
  Button,
  Tag
} from '@carbon/react';
import { ChevronLeft, ChevronRight, Notification } from '@carbon/icons-react';

export default function DashboardAdditionalSections() {
  return (
    <Grid style={{ padding: '0 0 2rem 0' }}>
      {/* Calendar Section */}
      <Column lg={16} md={8} sm={4} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '1rem' }}>
          <Heading variant="h4">Calendar</Heading>
          <div style={{ display: 'flex' }}>
            <Button hasIconOnly renderIcon={ChevronLeft} iconDescription="Previous" kind="ghost" size="sm" />
            <Button hasIconOnly renderIcon={ChevronRight} iconDescription="Next" kind="ghost" size="sm" />
          </div>
        </div>
        <Tile>
          <Grid condensed>
            <Column lg={4} md={2} sm={4}>
              <Heading variant="h5">Today, Nov 4</Heading>
            </Column>
            <Column lg={12} md={6} sm={4}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div><strong>9:00 AM</strong> - Badminton / WREC-4</div>
                <div style={{ color: '#6f6f6f' }}>Hale-Andrews Center (HAC)</div>
              </div>
            </Column>
          </Grid>
        </Tile>
      </Column>

      {/* Announcements Section */}
      <Column lg={8} md={4} sm={4}>
        <Heading style={{ marginBottom: '1rem' }} variant="h4">
          Announcements
        </Heading>
        <Tile style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start' }}>
            <div>
              <Heading variant="h6" style={{ marginBottom: '0.5rem' }}>Project 2 Direction</Heading>
              <p style={{ fontSize: '0.875rem' }}>Review the new landing page examples for Project 2.</p>
            </div>
            <Tag type="blue" size="sm">New</Tag>
          </div>
        </Tile>
      </Column>

      {/* Bookmarks Section */}
      <Column lg={8} md={4} sm={4}>
        <Heading style={{ marginBottom: '1rem' }} variant="h4">
          Bookmarks
        </Heading>
        <Tile>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>• Course Syllabus PDF</li>
            <li style={{ marginBottom: '0.5rem' }}>• Weekly Reading List</li>
            <li>• Project Submission Portal</li>
          </ul>
        </Tile>
      </Column>
    </Grid>
  );
}
