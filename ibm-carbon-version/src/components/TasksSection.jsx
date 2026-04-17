'use client';

import {
  Grid,
  Column,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Tag,
  Heading
} from '@carbon/react';

export default function TasksSection() {
  return (
    <Grid style={{ padding: '2rem 0' }}>
      <Column lg={8} md={4} sm={4}>
        <Heading style={{ marginBottom: '1rem' }} variant="h4">
          Upcoming Tasks
        </Heading>
        <StructuredListWrapper ariaLabel="Upcoming Tasks">
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Task</StructuredListCell>
              <StructuredListCell head>Course</StructuredListCell>
              <StructuredListCell head>Due Date</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>Weekly 1: Thesis Program</StructuredListCell>
              <StructuredListCell>VCDE 790</StructuredListCell>
              <StructuredListCell>Oct 31</StructuredListCell>
            </StructuredListRow>
            <StructuredListRow>
              <StructuredListCell>W3 - Review</StructuredListCell>
              <StructuredListCell>VCDE 737</StructuredListCell>
              <StructuredListCell>Sept 11</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </Column>

      <Column lg={8} md={4} sm={4}>
        <Heading style={{ marginBottom: '1rem' }} variant="h4">
          Overdue Tasks
        </Heading>
        <StructuredListWrapper ariaLabel="Overdue Tasks">
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Task</StructuredListCell>
              <StructuredListCell head>Status</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>Initial Research</StructuredListCell>
              <StructuredListCell>
                <Tag type="red" size="sm">6 Days Late</Tag>
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow>
              <StructuredListCell>W2 - Review</StructuredListCell>
              <StructuredListCell>
                <Tag type="red" size="sm">4 Days Late</Tag>
              </StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </Column>
    </Grid>
  );
}
