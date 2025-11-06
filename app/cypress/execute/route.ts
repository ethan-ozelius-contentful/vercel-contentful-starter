import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Log the incoming request for debugging
    console.log('Received POST request to /api/cypress/execute:', body);
    
    // Add logic here to execute Cypress tests github action, passing payload from request
    
    // Example response
    const response = {
      success: true,
      message: 'Request processed successfully',
      data: body,
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error('Error processing POST request:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
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