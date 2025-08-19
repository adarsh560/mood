import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { taskId } = await request.json()

    if (!taskId) {
      return NextResponse.json({ error: 'Task ID required' }, { status: 400 })
    }

    // Create a log entry for task completion
    const log = await prisma.log.create({
      data: {
        taskId,
        userId: 1, // Default user for now
        completed: true
      }
    })

    return NextResponse.json({ success: true, log })
  } catch (error) {
    console.error('Error completing task:', error)
    return NextResponse.json({ error: 'Failed to complete task' }, { status: 500 })
  }
}