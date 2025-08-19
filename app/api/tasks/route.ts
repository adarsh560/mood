import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  if (!type || !['virtual', 'real'].includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  try {
    // Get random task of the specified type
    const tasks = await prisma.task.findMany({
      where: { type }
    })

    if (tasks.length === 0) {
      return NextResponse.json({
        id: 0,
        title: `No ${type} tasks available`,
        description: `No ${type} tasks found in database`,
        imageUrl: null
      })
    }

    // Return random task
    const randomIndex = Math.floor(Math.random() * tasks.length)
    const task = tasks[randomIndex]

    return NextResponse.json(task)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}