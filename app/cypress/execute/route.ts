import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    const testSuite = {
      "description": "This is a test suite for the Spring Campaign, running in the production environment.",
      "environment": "Production",
      "id": "c9b0b7e4-abc6-4d8d-adda-3925eca4087d",
      "name": "Spring Campaign Test Suite",
      "url": "https://contentful.com",
      "assertions": [
          {
              "contentType": "tutorial",
              "entryId": "6JyLopBthivLRgVemaKOSd",
              "fieldName": "title",
              "selector": "[data-field=\"title\"]",
              "type": "text",
              "value": "Machine Learning Fundamentals with Python"
          },
          {
              "contentType": "tutorial",
              "entryId": "6JyLopBthivLRgVemaKOSd",
              "fieldName": "slug",
              "selector": "[data-field=\"slug\"]",
              "type": "text",
              "value": "machine-learning-fundamentals-with-python"
          }
      ]
  }
    console.log('Received POST request to /api/cypress/execute:', body);
    const resp = await fetch(
      `https://api.github.com/repos/ethan-ozelius-contentful/vercel-contentful-starter` +
        `/actions/workflows/run-cypress.yml/dispatches`,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${process.env.GH_TOKEN!}`, // PAT or GitHub App installation token
          accept: 'application/vnd.github+json',
        },
        body: JSON.stringify({
          ref: 'main', // branch to run on
          inputs: { requestId: '2', baseUrl: 'https://vercel-contentful-starter-ethan-oze-mocha.vercel.app/', config: JSON.stringify(testSuite) }, // your workflow_dispatch inputs
        }),
      }
    );
    const respsonseText = await resp.text();
    // Add logic here to execute Cypress tests github action, passing payload from request
    console.log('Received POST request to /api/cypress/execute:', respsonseText);
    // Example response
    const response = {
      success: true,
      message: 'Request processed successfully',
      data: body,
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json(response, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://app.contentful.com'
      }
    });
    
  } catch (error) {
    console.error('Error processing POST request:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://app.contentful.com'
        }
      }
    );
  }
}

// Optional: Handle other HTTP methods if needed
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://app.contentful.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}