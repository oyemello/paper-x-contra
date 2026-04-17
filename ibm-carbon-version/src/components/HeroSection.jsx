'use client';

import { 
  Grid, 
  Column, 
  Tile, 
  Button, 
  Tag, 
  Heading 
} from '@carbon/react';
import { ArrowRight, Document } from '@carbon/icons-react';

export default function HeroSection() {
  return (
    <div style={{ backgroundColor: '#F4F4F4', padding: '2rem 0' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ marginBottom: '2rem' }}>
            <Tag type="red" size="md">
              Current Version: v4
            </Tag>
          </div>
          <Heading style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
            Week 11 - 2024 Fall Semester
          </Heading>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button renderIcon={ArrowRight} kind="primary">
              Open Course
            </Button>
            <Button renderIcon={Document} kind="ghost">
              Syllabus
            </Button>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
